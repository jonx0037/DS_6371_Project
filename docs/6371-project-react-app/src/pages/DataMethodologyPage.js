import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

const DataMethodologyPage = () => {
  // Key variables from the dataset
  const keyVariables = [
    {
      name: 'SalePrice',
      description: 'The sale price of the house in dollars (target variable)',
      type: 'Numeric',
      examples: '$34,900 to $755,000'
    },
    {
      name: 'GrLivArea',
      description: 'Above grade (ground) living area square feet',
      type: 'Numeric',
      examples: '334 to 5,642 sq ft'
    },
    {
      name: 'OverallQual',
      description: 'Rates the overall material and finish of the house',
      type: 'Ordinal (1-10)',
      examples: '1=Very Poor, 10=Very Excellent'
    },
    {
      name: 'YearBuilt',
      description: 'Original construction year of the house',
      type: 'Numeric',
      examples: '1872 to 2010'
    },
    {
      name: 'TotalBsmtSF',
      description: 'Total square feet of basement area',
      type: 'Numeric',
      examples: '0 to 6,110 sq ft'
    },
    {
      name: 'Neighborhood',
      description: 'Physical location within Ames city limits',
      type: 'Categorical',
      examples: 'NAmes, Edwards, BrkSide, etc.'
    },
    {
      name: 'FullBath',
      description: 'Full bathrooms above grade',
      type: 'Numeric',
      examples: '0 to 3'
    },
    {
      name: 'GarageCars',
      description: 'Size of garage in car capacity',
      type: 'Numeric',
      examples: '0 to 4'
    }
  ];

  // Statistical methods used
  const statisticalMethods = [
    {
      name: 'Simple Linear Regression',
      description: 'Modeling the relationship between a single predictor variable and the response variable',
      useCase: 'Examining the relationship between living area (GrLivArea) and sale price',
      formula: 'SalePrice = β₀ + β₁ × GrLivArea + ε'
    },
    {
      name: 'Multiple Linear Regression',
      description: 'Extending simple linear regression to include multiple predictor variables',
      useCase: 'Building predictive models with multiple housing characteristics',
      formula: 'SalePrice = β₀ + β₁ × GrLivArea + β₂ × OverallQual + ... + βₚ × Xₚ + ε'
    },
    {
      name: 'Interaction Models',
      description: 'Including interaction terms to capture how the relationship between predictors and the response may depend on the values of other predictors',
      useCase: 'Analyzing how the relationship between living area and price varies by neighborhood',
      formula: 'SalePrice = β₀ + β₁ × GrLivArea + β₂ × Neighborhood + β₃ × (GrLivArea × Neighborhood) + ε'
    },
    {
      name: 'Model Diagnostics',
      description: 'Techniques to verify that model assumptions are met',
      useCase: 'Checking linearity, normality, homoscedasticity, and independence assumptions',
      formula: 'Various tests and visualizations including residual plots, Q-Q plots, and influence measures'
    },
    {
      name: 'Cross-Validation',
      description: 'Technique for assessing how a model will generalize to an independent dataset',
      useCase: 'Calculating CV PRESS to evaluate model performance',
      formula: 'CV PRESS = Σ(yᵢ - ŷ₍₋ᵢ₎)², where ŷ₍₋ᵢ₎ is the prediction for observation i from a model fit without observation i'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          Data & Methodology
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
          Understanding the dataset and analytical approaches
        </Typography>
        
        {/* Dataset Overview */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Dataset Overview
        </Typography>
        
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              The Ames Housing Dataset
            </Typography>
            <Typography variant="body1" paragraph>
              The Ames Housing dataset was compiled by Dean De Cock for use in data science education. It contains information on residential 
              homes in Ames, Iowa, with 79 explanatory variables describing almost every aspect of the properties.
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2, height: '100%' }}>
                  <Typography variant="h3" color="primary">
                    1,460
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Training Observations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2, height: '100%' }}>
                  <Typography variant="h3" color="primary">
                    1,459
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Test Observations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2, height: '100%' }}>
                  <Typography variant="h3" color="primary">
                    79
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Explanatory Variables
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{ textAlign: 'center', p: 2, backgroundColor: '#f5f5f5', borderRadius: 2, height: '100%' }}>
                  <Typography variant="h3" color="primary">
                    $180K
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Median Sale Price
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Typography variant="body1" sx={{ mt: 3 }}>
              The dataset includes observations from 2006 to 2010, covering a wide range of housing types, conditions, and price points.
              It is particularly valuable for data science education as it includes a mixture of:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Continuous variables (e.g., square footage, age)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Categorical variables (e.g., neighborhood, exterior material)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Ordinal variables (e.g., overall quality and condition ratings)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Variables with missing values requiring appropriate handling
                </Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Key Variables */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Key Variables
        </Typography>
        
        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table sx={{ minWidth: 650 }} aria-label="key variables table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Variable Name</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Examples</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {keyVariables.map((variable, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell component="th" scope="row">
                    <Typography variant="body1" fontWeight={500}>
                      {variable.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{variable.description}</TableCell>
                  <TableCell>{variable.type}</TableCell>
                  <TableCell>{variable.examples}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <Typography variant="body2" color="text.secondary">
          For a complete list of all 79 variables and their descriptions, refer to the 
          <Link 
            href="/downloads" 
            sx={{ mx: 1 }}
          >
            data dictionary
          </Link>
          in the Downloads section.
        </Typography>
        
        <Divider sx={{ my: 5 }} />
        
        {/* Analytical Methodology */}
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
          Analytical Methodology
        </Typography>
        
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Data Preprocessing
            </Typography>
            <Typography variant="body1" paragraph>
              Before applying statistical methods, the dataset required preprocessing:
            </Typography>
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Handling Missing Values:</strong> For the Century 21 analysis, we filtered to include only the 
                  three neighborhoods of interest, which contained minimal missing data. For the all-neighborhoods predictive 
                  model, we addressed missing values through appropriate imputation techniques.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Feature Scaling:</strong> For the Century 21 analysis, we scaled GrLivArea to units of 100 sq. ft. 
                  to make the coefficients more interpretable for real estate professionals.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Variable Selection:</strong> For the predictive models, we selected variables based on correlation 
                  with SalePrice, domain knowledge, and statistical significance.
                </Typography>
              </li>
            </ol>
          </CardContent>
        </Card>
        
        {/* Statistical Methods */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 3 }}>
          Statistical Methods
        </Typography>
        
        <Grid container spacing={3}>
          {statisticalMethods.map((method, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {method.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {method.description}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    Application in Our Analysis:
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {method.useCase}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    Formula:
                  </Typography>
                  <Box sx={{ p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant="body2" fontFamily="monospace">
                      {method.formula}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Model Evaluation */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Model Evaluation
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              We evaluated our models using multiple performance metrics:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Adjusted R²:</strong> Measures the proportion of variance explained by the model, adjusted for the number 
                  of predictors. Higher values indicate better fit.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Cross-Validated PRESS (Prediction Error Sum of Squares):</strong> Assesses how well the model will perform 
                  on new data. Lower values indicate better predictive performance.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>AIC (Akaike Information Criterion):</strong> Balances goodness of fit with model simplicity. 
                  Lower values indicate better models.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Kaggle Score (RMSE):</strong> For the predictive models in Analysis 2, we evaluated performance 
                  using the Root Mean Squared Error on the Kaggle test dataset. Lower values indicate better predictive accuracy.
                </Typography>
              </li>
            </ul>
            <Typography variant="body1">
              These metrics helped us identify the most effective models for both understanding the relationship between 
              living area and price in specific neighborhoods (Analysis 1) and for predicting house prices across all 
              neighborhoods (Analysis 2).
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DataMethodologyPage;