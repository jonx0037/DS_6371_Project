import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Plot from 'react-plotly.js';

const AnalysisAllNeighborhoodsPage = () => {
  // Sample data for model comparison visualization
  const modelComparisonData = [
    {
      x: ['Simple Linear Regression', 'Multiple Linear Regression 1', 'Multiple Linear Regression 2'],
      y: [0.51, 0.57, 0.80],
      type: 'bar',
      name: 'Adjusted R²',
      marker: {
        color: '#2c7fb8'
      }
    },
    {
      x: ['Simple Linear Regression', 'Multiple Linear Regression 1', 'Multiple Linear Regression 2'],
      y: [0.721, 0.624, 0.412],
      type: 'bar',
      name: 'Kaggle Score (RMSE)',
      marker: {
        color: '#5ab4ac'
      },
      yaxis: 'y2'
    }
  ];

  const modelComparisonLayout = {
    title: 'Model Comparison',
    barmode: 'group',
    yaxis: {
      title: 'Adjusted R²',
      side: 'left'
    },
    yaxis2: {
      title: 'Kaggle Score (RMSE)',
      side: 'right',
      overlaying: 'y',
      showgrid: false
    },
    legend: {
      x: 0.5,
      y: 1.2,
      orientation: 'h'
    },
    autosize: true,
    height: 500,
    margin: {
      l: 60,
      r: 60,
      b: 100,
      t: 80,
      pad: 4
    }
  };

  // Feature importance data
  const featureImportanceData = [{
    x: ['OverallQual', 'GrLivArea', 'YearBuilt', 'TotalBsmtSF', 'GarageCars'],
    y: [12000, 35, 9000, 25, 9000],
    type: 'bar',
    marker: {
      color: ['#2c7fb8', '#5ab4ac', '#d8b365', '#f59899', '#8c510a']
    }
  }];

  const featureImportanceLayout = {
    title: 'Feature Importance ($ Impact per Unit)',
    xaxis: {
      title: 'Feature'
    },
    yaxis: {
      title: 'Impact on Price ($)',
      tickformat: '$,.0f'
    },
    autosize: true,
    height: 400,
    margin: {
      l: 80,
      r: 30,
      b: 80,
      t: 80,
      pad: 4
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          Analysis 2: Predictive Modeling for All Neighborhoods
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Building effective price prediction models across all Ames neighborhoods
        </Typography>
        
        {/* Problem Statement */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Problem Statement
            </Typography>
            <Typography variant="body1" paragraph>
              For this analysis, we needed to build the most predictive model for sale prices of homes across all 
              neighborhoods in Ames, Iowa. We created three competing models:
            </Typography>
            <ol>
              <li>
                <Typography variant="body1">
                  A simple linear regression model with GrLivArea as the predictor
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  A multiple linear regression model with GrLivArea and FullBath as predictors
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  A more complex multiple linear regression model with selected variables: GrLivArea, OverallQual, 
                  YearBuilt, TotalBsmtSF, and GarageCars
                </Typography>
              </li>
            </ol>
            <Typography variant="body1">
              These models were compared using adjusted R², CV PRESS, AIC, and Kaggle Score to determine the most effective 
              approach for predicting house prices.
            </Typography>
          </CardContent>
        </Card>
        
        {/* Model Comparison Visualization */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Model Comparison
        </Typography>
        
        <Card className="visualization-container">
          <CardContent>
            <Plot
              data={modelComparisonData}
              layout={modelComparisonLayout}
              style={{ width: '100%' }}
              useResizeHandler={true}
              config={{ responsive: true }}
            />
            
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
              The Multiple Linear Regression 2 model shows the best performance with the highest Adjusted R² and lowest Kaggle Score (RMSE).
            </Typography>
          </CardContent>
        </Card>
        
        {/* Model Comparison Table */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Detailed Model Comparison
          </Typography>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="model comparison table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Model</strong></TableCell>
                  <TableCell align="right"><strong>Adjusted R²</strong></TableCell>
                  <TableCell align="right"><strong>CV PRESS</strong></TableCell>
                  <TableCell align="right"><strong>AIC</strong></TableCell>
                  <TableCell align="right"><strong>Kaggle Score</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Simple Linear Regression</TableCell>
                  <TableCell align="right">0.51</TableCell>
                  <TableCell align="right">3.62 × 10¹²</TableCell>
                  <TableCell align="right">43,824</TableCell>
                  <TableCell align="right">0.721</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multiple Linear Regression 1</TableCell>
                  <TableCell align="right">0.57</TableCell>
                  <TableCell align="right">3.21 × 10¹²</TableCell>
                  <TableCell align="right">43,672</TableCell>
                  <TableCell align="right">0.624</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multiple Linear Regression 2</TableCell>
                  <TableCell align="right">0.80</TableCell>
                  <TableCell align="right">1.84 × 10¹²</TableCell>
                  <TableCell align="right">42,856</TableCell>
                  <TableCell align="right">0.412</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            All metrics consistently indicate that Multiple Linear Regression 2 is the superior model.
          </Typography>
        </Box>
        
        <Divider sx={{ my: 5 }} />
        
        {/* Feature Importance */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Key Predictors of House Prices
        </Typography>
        
        <Card className="visualization-container">
          <CardContent>
            <Plot
              data={featureImportanceData}
              layout={featureImportanceLayout}
              style={{ width: '100%' }}
              useResizeHandler={true}
              config={{ responsive: true }}
            />
            
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph>
                  Our analysis identified five critical factors that significantly influence house prices in Ames:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      <strong>Overall Quality (OverallQual):</strong> Each one-point increase in the 1-10 quality scale is associated 
                      with approximately $12,000 increase in price
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Above Ground Living Area (GrLivArea):</strong> Each additional square foot corresponds to about 
                      $35 increase in price
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Year Built (YearBuilt):</strong> Newer homes command higher prices, with each decade of construction 
                      age worth approximately $9,000
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Total Basement Square Footage (TotalBsmtSF):</strong> Contributes about $25 per square foot to the home value
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Garage Capacity (GarageCars):</strong> Each additional car space adds approximately $9,000 to the home value
                    </Typography>
                  </li>
                </ul>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Model Diagnostics
                </Typography>
                <Typography variant="body1" paragraph>
                  The MLR2 model was validated through thorough diagnostic testing:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      <strong>Linearity:</strong> Generally good adherence to linearity assumptions
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Normality:</strong> Residuals follow a reasonably normal distribution
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Homoscedasticity:</strong> Some heteroscedasticity at higher price points, suggesting the model 
                      may be less accurate for luxury homes
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Influential Points:</strong> Several influential points identified, primarily very large or 
                      expensive homes, but none significantly distorted the model
                    </Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Conclusion */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Conclusion
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              Our comprehensive analysis of house prices across all neighborhoods in Ames, Iowa has yielded several valuable insights:
            </Typography>
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Model Performance:</strong> The Multiple Linear Regression 2 model demonstrates superior predictive performance 
                  with an Adjusted R² of 0.80 and the lowest Kaggle Score among our models.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Critical Price Determinants:</strong> Overall quality, living area, age of the home, basement size, 
                  and garage capacity emerged as the most influential factors affecting house prices.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Practical Applications:</strong> This model provides actionable insights for:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Estimating market values for properties across all Ames neighborhoods
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Providing quantitative guidance for homeowners considering renovations
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Helping real estate professionals provide more accurate property valuations
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Assisting developers in understanding which features provide the highest return on investment
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Limitations and Future Work:</strong> The model could be enhanced through:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Addressing non-linear relationships in some variables
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Developing neighborhood-specific sub-models
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Further feature engineering to improve predictive performance
                    </Typography>
                  </li>
                </ul>
              </li>
            </ol>
            <Typography variant="body1">
              This analysis provides a solid foundation for understanding the Ames housing market and offers a reliable 
              predictive model for estimating house prices based on key property characteristics.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AnalysisAllNeighborhoodsPage;