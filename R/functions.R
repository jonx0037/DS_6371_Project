# Custom functions for data preprocessing, model evaluation, and visualization

# Load required libraries
library(tidyverse)
library(ggplot2)
library(caret)

# Function to preprocess the data
preprocess_data <- function(data) {
  # Handle missing values
  data <- data %>%
    mutate_if(is.numeric, ~replace(., is.na(.), mean(., na.rm = TRUE))) %>%
    mutate_if(is.character, ~replace(., is.na(.), "Unknown"))
  
  return(data)
}

# Function to evaluate model performance
evaluate_model <- function(model, test_data) {
  predictions <- predict(model, newdata = test_data)
  actuals <- test_data$SalePrice
  
  # Calculate RMSE
  rmse <- sqrt(mean((predictions - actuals)^2))
  
  # Calculate R-squared
  r_squared <- cor(predictions, actuals)^2
  
  return(list(RMSE = rmse, R_squared = r_squared))
}

# Function to create a scatter plot with regression line
plot_scatter_with_regression <- function(data, x_var, y_var, title) {
  ggplot(data, aes_string(x = x_var, y = y_var)) +
    geom_point(alpha = 0.5) +
    geom_smooth(method = "lm", se = TRUE, color = "blue") +
    labs(title = title, x = x_var, y = y_var) +
    theme_minimal()
}