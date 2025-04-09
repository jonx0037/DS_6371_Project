# Analysis for All Neighborhoods in Ames Housing Dataset
# This script builds predictive models for house prices across all neighborhoods in Ames, Iowa

# Load required libraries
library(tidyverse)
library(caret)
library(glmnet)
library(car)       # For regression diagnostics
library(leaps)     # For model selection
library(MASS)      # For stepwise regression

# Load the datasets
train <- read.csv("data/house-prices-advanced-regression-techniques/train.csv")
test <- read.csv("data/house-prices-advanced-regression-techniques/test.csv")

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
price_area_plot <- ggplot(train, aes(x = GrLivArea, y = SalePrice)) +
  geom_point(alpha = 0.5) +
  geom_smooth(method = "lm") +
  labs(title = "Sale Price vs Living Area", x = "Living Area (sq ft)", y = "Sale Price ($)")

print(price_area_plot)
ggsave("outputs/figures/price_vs_area.png", price_area_plot, width = 10, height = 8)

# Explore relationships between SalePrice and other key variables
par(mfrow = c(2, 2))
plot(train$FullBath, train$SalePrice, main = "SalePrice vs FullBath", 
     xlab = "FullBath", ylab = "SalePrice")
plot(train$YearBuilt, train$SalePrice, main = "SalePrice vs YearBuilt", 
     xlab = "YearBuilt", ylab = "SalePrice")
plot(train$OverallQual, train$SalePrice, main = "SalePrice vs OverallQual", 
     xlab = "OverallQual", ylab = "SalePrice")
plot(train$GarageCars, train$SalePrice, main = "SalePrice vs GarageCars", 
     xlab = "GarageCars", ylab = "SalePrice")

# Calculate correlations with SalePrice
numeric_vars <- sapply(train, is.numeric)
correlations <- cor(train[, numeric_vars], train$SalePrice, use = "complete.obs")
correlations <- sort(abs(correlations), decreasing = TRUE)
top_correlations <- head(correlations, 10)
print(top_correlations)

# Model Building
# Simple Linear Regression Model
slr_model <- lm(SalePrice ~ GrLivArea, data = train)
summary(slr_model)

# Multiple Linear Regression Model 1
mlr1_model <- lm(SalePrice ~ GrLivArea + FullBath, data = train)
summary(mlr1_model)

# Multiple Linear Regression Model 2
mlr2_model <- lm(SalePrice ~ GrLivArea + OverallQual + YearBuilt + 
                  TotalBsmtSF + GarageCars, data = train)
summary(mlr2_model)

# Check assumptions for the best model
par(mfrow = c(2, 2))
plot(mlr2_model)

# Calculate Cook's distance for MLR2
cooksd_mlr2 <- cooks.distance(mlr2_model)

# Plot Cook's distance
plot(cooksd_mlr2, pch = 19, main = "Cook's Distance", ylab = "Cook's Distance")
abline(h = 4/nrow(train), col = "red")  # Threshold line

# Identify influential points
influential_points_mlr2 <- which(cooksd_mlr2 > 4/nrow(train))
print(head(train[influential_points_mlr2, c("Id", "GrLivArea", "SalePrice")], 10))

# Function to calculate CV PRESS
cv_press <- function(model) {
  pr <- residuals(model)/(1 - hatvalues(model))
  sum(pr^2)
}

# Compare models
all_model_comparison <- data.frame(
  Model = c("Simple Linear Regression", 
            "Multiple Linear Regression 1", 
            "Multiple Linear Regression 2"),
  Adj_R2 = c(summary(slr_model)$adj.r.squared,
             summary(mlr1_model)$adj.r.squared,
             summary(mlr2_model)$adj.r.squared),
  CV_PRESS = c(cv_press(slr_model),
               cv_press(mlr1_model),
               cv_press(mlr2_model)),
  AIC = c(AIC(slr_model),
          AIC(mlr1_model),
          AIC(mlr2_model))
)

print(all_model_comparison)

# Model Evaluation
# Cross-validation
set.seed(123)
train_control <- trainControl(method = "cv", number = 10)
cv_model <- train(SalePrice ~ GrLivArea + OverallQual + YearBuilt + 
                  TotalBsmtSF + GarageCars, 
                  data = train, method = "lm", trControl = train_control)

print(cv_model)

# Save the model
saveRDS(cv_model, "outputs/models/all_neighborhoods_model.rds")

# Predictions on test set
predictions <- predict(cv_model, newdata = test)

# Prepare submission
submission <- data.frame(Id = test$Id, SalePrice = predictions)
write.csv(submission, "outputs/submissions/submission.csv", row.names = FALSE)

# Generate predictions for training data for visualization
train$predicted <- predict(cv_model, newdata = train)

# Create visualization of actual vs predicted values
actual_vs_predicted <- ggplot(train, aes(x = predicted, y = SalePrice)) +
  geom_point(alpha = 0.5) +
  geom_abline(intercept = 0, slope = 1, linetype = "dashed", color = "red") +
  scale_x_continuous(labels = scales::comma) +
  scale_y_continuous(labels = scales::comma) +
  labs(title = "Actual vs. Predicted Sale Prices",
       x = "Predicted Sale Price ($)",
       y = "Actual Sale Price ($)") +
  theme_minimal()

print(actual_vs_predicted)
ggsave("outputs/figures/actual_vs_predicted.png", actual_vs_predicted, width = 10, height = 8)

# Print a message indicating completion
cat("Analysis completed. Results saved to outputs directory.\n")
