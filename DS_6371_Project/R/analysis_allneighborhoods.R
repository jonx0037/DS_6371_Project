# Analysis for All Neighborhoods in Ames Housing Dataset

# Load required libraries
library(tidyverse)
library(caret)
library(glmnet)

# Load the datasets
train <- read.csv("../data/house-prices-advanced-regression-techniques/train.csv")
test <- read.csv("../data/house-prices-advanced-regression-techniques/test.csv")

# Data Preprocessing
# Function to preprocess the data
preprocess_data <- function(data) {
  # Handle missing values
  data[is.na(data)] <- 0
  
  # Convert categorical variables to factors
  categorical_vars <- sapply(data, is.character)
  data[categorical_vars] <- lapply(data[categorical_vars], as.factor)
  
  return(data)
}

train <- preprocess_data(train)
test <- preprocess_data(test)

# Exploratory Data Analysis
# Visualize relationships between SalePrice and key variables
ggplot(train, aes(x = GrLivArea, y = SalePrice)) +
  geom_point(alpha = 0.5) +
  geom_smooth(method = "lm") +
  labs(title = "Sale Price vs Living Area", x = "Living Area (sq ft)", y = "Sale Price ($)")

# Model Building
# Simple Linear Regression Model
slr_model <- lm(SalePrice ~ GrLivArea, data = train)
summary(slr_model)

# Multiple Linear Regression Model
mlr_model <- lm(SalePrice ~ GrLivArea + FullBath + OverallQual, data = train)
summary(mlr_model)

# Model Evaluation
# Cross-validation
set.seed(123)
train_control <- trainControl(method = "cv", number = 10)
cv_model <- train(SalePrice ~ GrLivArea + FullBath + OverallQual, data = train, method = "lm", trControl = train_control)

# Predictions on test set
predictions <- predict(cv_model, newdata = test)

# Prepare submission
submission <- data.frame(Id = test$Id, SalePrice = predictions)
write.csv(submission, "../outputs/submissions/submission.csv", row.names = FALSE)