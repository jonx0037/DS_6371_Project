# Analysis for Century 21 Ames Neighborhoods
# This script analyzes how house sale prices relate to living area in three specific neighborhoods

# Load required libraries
library(tidyverse)
library(car)       # For regression diagnostics
library(caret)     # For model training and evaluation
library(leaps)     # For model selection
library(MASS)      # For stepwise regression
library(lmtest)    # For model testing
library(glmnet)    # For regularized regression

# Load the datasets
train <- read.csv("data/house-prices-advanced-regression-techniques/train.csv")
test <- read.csv("data/house-prices-advanced-regression-techniques/test.csv")

# Filter data for the three neighborhoods of interest
century21_data <- train %>%
  filter(Neighborhood %in% c("NAmes", "Edwards", "BrkSide"))

# Basic statistics by neighborhood
neighborhood_stats <- century21_data %>%
  group_by(Neighborhood) %>%
  summarize(
    Count = n(),
    Mean_Price = mean(SalePrice),
    Median_Price = median(SalePrice),
    Mean_Area = mean(GrLivArea),
    Median_Area = median(GrLivArea),
    Price_per_sqft = mean(SalePrice) / mean(GrLivArea)
  )

print(neighborhood_stats)

# Visualize the relationship between SalePrice and GrLivArea by neighborhood
ggplot(century21_data, aes(x = GrLivArea, y = SalePrice, color = Neighborhood)) +
  geom_point(alpha = 0.7) +
  geom_smooth(method = "lm", se = TRUE) +
  scale_y_continuous(labels = scales::comma) +
  labs(title = "Sale Price vs. Living Area by Neighborhood",
       x = "Above Grade (Ground) Living Area (sq ft)",
       y = "Sale Price ($)") +
  theme_minimal()

# Scale GrLivArea to 100 sq ft units for easier interpretation
century21_data$GrLivArea_100 <- century21_data$GrLivArea / 100

# Model 1: Simple linear regression
model1 <- lm(SalePrice ~ GrLivArea_100, data = century21_data)
summary(model1)

# Model 2: Including neighborhood
model2 <- lm(SalePrice ~ GrLivArea_100 + Neighborhood, data = century21_data)
summary(model2)

# Model 3: Including interaction
model3 <- lm(SalePrice ~ GrLivArea_100 * Neighborhood, data = century21_data)
summary(model3)

# Check assumptions for the best model
par(mfrow = c(2, 2))
plot(model3)

# Calculate Cook's distance
cooksd <- cooks.distance(model3)

# Plot Cook's distance
plot(cooksd, pch = 19, main = "Cook's Distance", ylab = "Cook's Distance")
abline(h = 4/nrow(century21_data), col = "red")  # Threshold line

# Identify influential points
influential_points <- which(cooksd > 4/nrow(century21_data))
print(century21_data[influential_points, c("Id", "Neighborhood", "GrLivArea", "SalePrice")])

# Function to calculate CV PRESS
cv_press <- function(model) {
  pr <- residuals(model)/(1 - hatvalues(model))
  sum(pr^2)
}

# Compare models
model_comparison <- data.frame(
  Model = c("Model 1: GrLivArea", 
            "Model 2: GrLivArea + Neighborhood", 
            "Model 3: GrLivArea * Neighborhood"),
  Adj_R2 = c(summary(model1)$adj.r.squared,
             summary(model2)$adj.r.squared,
             summary(model3)$adj.r.squared),
  CV_PRESS = c(cv_press(model1),
               cv_press(model2),
               cv_press(model3)),
  AIC = c(AIC(model1),
          AIC(model2),
          AIC(model3))
)

print(model_comparison)

# Confidence intervals for the best model
conf_int <- confint(model3, level = 0.95)
print(conf_int)

# Save the model
saveRDS(model3, "outputs/models/century21_model.rds")

# Generate predictions for visualization
century21_data$predicted <- predict(model3, newdata = century21_data)

# Create visualization of actual vs predicted values
ggplot(century21_data, aes(x = predicted, y = SalePrice, color = Neighborhood)) +
  geom_point(alpha = 0.7) +
  geom_abline(intercept = 0, slope = 1, linetype = "dashed") +
  scale_x_continuous(labels = scales::comma) +
  scale_y_continuous(labels = scales::comma) +
  labs(title = "Actual vs. Predicted Sale Prices",
       x = "Predicted Sale Price ($)",
       y = "Actual Sale Price ($)") +
  theme_minimal()

# Save the plot
ggsave("outputs/figures/century21_actual_vs_predicted.png", width = 10, height = 8)
