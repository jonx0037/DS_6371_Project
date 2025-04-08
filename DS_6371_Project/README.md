# DS 6371 Project - House Prices Analysis

## Overview
This project analyzes the Ames Housing dataset to explore the relationship between various features of residential homes and their sale prices. The analysis is divided into two main parts: examining house sale prices in specific neighborhoods and building predictive models for house prices across all neighborhoods in Ames, Iowa.

## Project Structure
- **data/**: Contains the datasets used for analysis.
  - **house-prices-advanced-regression-techniques/**: 
    - `train.csv`: Training dataset with features and sale prices.
    - `test.csv`: Test dataset for model evaluation.
  
- **R/**: Contains R scripts for analysis and functions.
  - `functions.R`: Custom functions for data preprocessing, model evaluation, and visualization.
  - `analysis_century21.R`: Analysis specific to the Century 21 Ames neighborhood.
  - `analysis_allneighborhoods.R`: Analysis for all neighborhoods in Ames.

- **outputs/**: Stores results from the analysis.
  - **figures/**: Visualizations generated during the analysis.
  - **models/**: Trained models for predictions.
  - **submissions/**: 
    - `submission.csv`: Final predictions for the test dataset.

- **docs/**: Documentation related to the project.
  - `data_dictionary.md`: Description of the dataset and variable definitions.

- `DS_6371_Project_Jonathan,_Samson.Rmd`: Main R Markdown file documenting the analysis.

- `.gitignore`: Specifies files and directories to be ignored by Git.

## Setup Instructions
1. Clone the repository to your local machine.
2. Install the required R packages listed in the `R/functions.R` file.
3. Load the datasets from the `data/house-prices-advanced-regression-techniques/` directory.
4. Run the analysis scripts in the `R/` directory to generate results and visualizations.

## Usage Guidelines
- Use the `DS_6371_Project_Jonathan,_Samson.Rmd` file to view the complete analysis, including code, results, and visualizations.
- Modify the analysis scripts in the `R/` directory as needed to explore different aspects of the dataset or to refine the models.
- Visualizations and models can be found in the `outputs/` directory after running the analysis scripts.