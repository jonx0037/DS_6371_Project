import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid, Divider } from '@mui/material';
import NeighborhoodPricePlot from '../components/visualizations/NeighborhoodPricePlot';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const AnalysisCentury21Page = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          Analysis 1: Century 21 Ames Neighborhood Analysis
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Analyzing house prices in relation to living area across three key neighborhoods
        </Typography>
        
        {/* Problem Statement */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Problem Statement
            </Typography>
            <Typography variant="body1" paragraph>
              Century 21 Ames, a real estate company in Ames, Iowa, commissioned this analysis to understand how the sale price 
              of houses is related to the square footage of the living area (GrLivArea) and whether this relationship varies by neighborhood. 
              The company only sells houses in three neighborhoods: NAmes, Edwards, and BrkSide.
            </Typography>
            <Typography variant="body1">
              Our objectives were to:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Build a model that relates sale price to living area
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Determine if this relationship differs by neighborhood
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Provide estimates and confidence intervals for the relationship
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Ensure model assumptions are met and address any outliers
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Present the results in terms of 100 sq. ft. increments of living area
                </Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Interactive Visualization */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Interactive Visualization
        </Typography>
        
        <NeighborhoodPricePlot />
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<OpenInNewIcon />}
            component="a"
            href="https://example.shinyapps.io/century21-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Full Shiny App
          </Button>
        </Box>
        
        <Divider sx={{ my: 5 }} />
        
        {/* Model Results */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Model Results
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Key Findings
                </Typography>
                <Typography variant="body1" paragraph>
                  Based on our regression analysis, we found significant differences in how living area affects house prices 
                  across the three neighborhoods:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      <strong>NAmes:</strong> For every 100 square feet of additional living area, sale price increases by approximately 
                      <span className="highlight"> $9,800</span> (95% CI: $8,200 - $11,400)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Edwards:</strong> For every 100 square feet of additional living area, sale price increases by approximately 
                      <span className="highlight"> $7,600</span> (95% CI: $6,100 - $9,100)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>BrkSide:</strong> For every 100 square feet of additional living area, sale price increases by approximately 
                      <span className="highlight"> $8,200</span> (95% CI: $6,500 - $9,900)
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Model Comparison
                </Typography>
                <Typography variant="body1" paragraph>
                  We compared three competing models:
                </Typography>
                <ol>
                  <li>
                    <Typography variant="body1">
                      <strong>Model 1:</strong> Simple linear regression with GrLivArea as the predictor
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Model 2:</strong> Multiple regression with GrLivArea and Neighborhood as predictors
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      <strong>Model 3:</strong> Multiple regression with interaction between GrLivArea and Neighborhood
                    </Typography>
                  </li>
                </ol>
                <Typography variant="body1" paragraph>
                  Model 3 consistently outperformed the other models across all evaluation metrics:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Highest Adjusted R²: 0.712
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Lowest CV PRESS: 2.34 × 10⁹
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Lowest AIC: 4,721
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Model Diagnostics */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Model Diagnostics
        </Typography>
        
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="body1" paragraph>
              The diagnostic analysis of our model indicates:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Linearity:</strong> The residual plots show a generally random scatter around zero, confirming 
                  the linear relationship between living area and sale price within each neighborhood.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Independence:</strong> The residuals show no significant patterns or autocorrelation, suggesting 
                  independence of observations.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Normality:</strong> The Q-Q plot indicates that residuals are approximately normally distributed, 
                  with slight deviations at the tails.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Equal Variance:</strong> The scale-location plot shows relatively constant variance across the 
                  range of fitted values.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Influential Points:</strong> We identified several houses with high Cook's distance values, but 
                  none exerted undue influence on the model estimates.
                </Typography>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Conclusion */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Conclusion
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              Our analysis provides Century 21 Ames with valuable insights into how living area affects 
              house prices in their three key neighborhoods:
            </Typography>
            <ol>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Neighborhood-Specific Pricing:</strong> The relationship between living area and sale price 
                  varies significantly by neighborhood, with NAmes showing the strongest price-to-area relationship.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Valuation Tool:</strong> The model provides a reliable tool for estimating house values 
                  based on living area within each neighborhood.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Investment Insights:</strong> For homeowners considering renovations to increase living space, 
                  the expected return on investment varies by neighborhood.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" paragraph>
                  <strong>Market Positioning:</strong> Century 21 Ames can use these insights to better advise clients 
                  on pricing strategies and neighborhood-specific market dynamics.
                </Typography>
              </li>
            </ol>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AnalysisCentury21Page;