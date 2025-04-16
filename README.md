# DS 6371 Project: House Prices Analysis

This repository contains the data science project for DS 6371 (Statistical Foundations for Data Science) at Southern Methodist University, Spring 2025. The project analyzes house prices in Ames, Iowa using regression techniques.

## Authors

- Jonathan Rocha
- Samson Akomolafe

## Project Overview

This analysis explores the Ames Housing dataset, which contains information on residential homes in Ames, Iowa. The dataset includes 79 explanatory variables describing various aspects of the homes, with the goal of predicting the final sale price of each property.

The analysis is divided into two main parts:

1. **Analysis 1**: Examining how house sale prices relate to living area (GrLivArea) in three specific neighborhoods (NAmes, Edwards, and BrkSide) for Century 21 Ames.

2. **Analysis 2**: Building predictive models for house prices across all neighborhoods in Ames, Iowa.

## Repository Structure

```
DS_6371_Project/
├── data/                           # Data directory
│   └── house-prices-advanced-regression-techniques/  # Kaggle dataset
│       ├── train.csv               # Training data
│       └── test.csv                # Test data
├── docs/                           # Documentation
│   └── data_dictionary.md          # Data dictionary explaining variables
├── outputs/                        # Output files
│   ├── figures/                    # Generated figures and plots
│   ├── models/                     # Saved model objects
│   └── submissions/                # Kaggle submission files
├── R/                              # R scripts
│   ├── analysis_allneighborhoods.R # Analysis for all neighborhoods
│   ├── analysis_century21.R        # Analysis for Century 21 neighborhoods
│   └── functions.R                 # Helper functions
├── DS_6371_Project_Jonathan,_Samson.Rmd  # Main R Markdown analysis
├── .gitignore                      # Git ignore file
├── LICENSE                         # License file
└── README.md                       # This file
```

## Data

The Ames Housing dataset was compiled by Dean De Cock for use in data science education. It contains information on residential homes in Ames, Iowa, with 79 explanatory variables describing almost every aspect of the properties.

- **Source**: Kaggle competition "House Prices - Advanced Regression Techniques"
- **Training set**: 1,460 observations
- **Test set**: 1,459 observations
- **Target variable**: SalePrice (the property's sale price in dollars)

## Analysis Methods

The project employs various statistical and machine learning techniques:

1. **Exploratory Data Analysis (EDA)** 
   - Data visualization
   - Summary statistics
   - Correlation analysis

2. **Regression Modeling**
   - Simple linear regression
   - Multiple linear regression
   - Interaction models

3. **Model Evaluation**
   - Adjusted R²
   - Cross-validated PRESS
   - AIC (Akaike Information Criterion)
   - Kaggle submission score

4. **Diagnostic Checks**
   - Residual analysis
   - Influential point detection
   - Assumption validation

## Project Website

An interactive dashboard for this project is available at:
[https://jonx0037.github.io/DS_6371_Project/](https://jonx0037.github.io/DS_6371_Project/)

The website provides:
- Interactive visualizations of the data
- Details about our analysis methodologies
- Results and findings from our models
- Access to downloadable resources

## Interactive Features

The R Markdown document includes an interactive Shiny application that allows users to:
- Filter data by neighborhood
- Adjust the living area range
- Toggle regression lines and confidence intervals
- View summary statistics for selected neighborhoods

## How to Run

1. Clone this repository
2. Open the R Markdown file `DS_6371_Project_Jonathan,_Samson.Rmd` in RStudio
3. Install required packages if needed
4. Knit the document to generate the HTML report

## Required R Packages

- tidyverse
- shiny
- shinyjs
- shinythemes
- DT
- ggplot2
- plotly
- ggthemes
- ggrepel
- car
- caret
- leaps
- MASS
- lmtest
- glmnet

## License

This project is licensed under the terms of the included MIT LICENSE file.
