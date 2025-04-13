import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CodeIcon from '@mui/icons-material/Code';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';

const KaggleInfoPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          Kaggle Competition Information
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
          About the "House Prices - Advanced Regression Techniques" Competition
        </Typography>
        
        {/* Competition Overview */}
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={7}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Competition Overview
                </Typography>
                <Typography variant="body1" paragraph>
                  The "House Prices: Advanced Regression Techniques" competition on Kaggle challenges data scientists 
                  to predict residential home prices in Ames, Iowa. The dataset includes 79 explanatory variables 
                  describing (almost) every aspect of the homes.
                </Typography>
                <Typography variant="body1" paragraph>
                  This competition is particularly valuable for data science students and practitioners as it:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <SchoolIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Provides a rich dataset with numerous feature types" 
                      secondary="Categorical, discrete, and continuous variables with missing values"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Offers a clear regression task" 
                      secondary="Predicting house prices with a well-defined evaluation metric (RMSE)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CodeIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Allows for creative feature engineering" 
                      secondary="Creating meaningful variables from raw data to improve predictions"
                    />
                  </ListItem>
                </List>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Competition Quick Facts
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <TimelineIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Competition Type" 
                        secondary="Knowledge Competition (Evergreen)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <BubbleChartIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Evaluation Metric" 
                        secondary="Root Mean Squared Error (RMSE)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LeaderboardIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Participants" 
                        secondary="Over 4,500 teams"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmojiEventsIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Top Scores" 
                        secondary="Best RMSE: ~0.10"
                      />
                    </ListItem>
                  </List>
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Kaggle Competition
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Evaluation Metrics */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Evaluation Metric Explained
        </Typography>
        
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Root Mean Squared Error (RMSE)
            </Typography>
            <Typography variant="body1" paragraph>
              The competition uses Root Mean Squared Error (RMSE) to evaluate predictions. This metric measures the square 
              root of the average squared differences between predicted and actual sale prices.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body1" gutterBottom sx={{ fontFamily: 'monospace' }}>
                    RMSE = √(Σ(y<sub>i</sub> - ŷ<sub>i</sub>)² / n)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Where:<br />
                    y<sub>i</sub> = actual sale price<br />
                    ŷ<sub>i</sub> = predicted sale price<br />
                    n = number of observations
                  </Typography>
                </Box>
                
                <Typography variant="body1" sx={{ mt: 2 }}>
                  A lower RMSE indicates better prediction accuracy. The score is calculated on the logarithm of the
                  predicted and actual prices to reduce the impact of outliers.
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Interpretation
                </Typography>
                <Typography variant="body1" paragraph>
                  The RMSE can be interpreted as the "typical" error in house price predictions. For example:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="RMSE of 0.10" 
                      secondary="Top-tier performance, approximately 10% error in price prediction"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="RMSE of 0.15" 
                      secondary="Good performance, approximately 15% error in price prediction"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <TrendingUpIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="RMSE of 0.20" 
                      secondary="Average performance, approximately 20% error in price prediction"
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        <Divider sx={{ my: 5 }} />
        
        {/* Our Approach */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Our Approach and Results
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Our Methodology
                </Typography>
                <Typography variant="body1" paragraph>
                  For this project, we focused on applying core statistical techniques from DS 6371 (Statistical Analysis with R):
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Simple Linear Regression" 
                      secondary="Modeling house price based on living area"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Multiple Linear Regression" 
                      secondary="Various models with different variable combinations"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Feature Selection" 
                      secondary="Identifying the most predictive variables"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AssessmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Model Diagnostics" 
                      secondary="Thorough evaluation of model assumptions"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Our Results
                </Typography>
                <Typography variant="body1" paragraph>
                  Our best performing model achieved:
                </Typography>
                <Box sx={{ p: 3, textAlign: 'center', backgroundColor: '#f5f5f5', borderRadius: 2, mb: 3 }}>
                  <Typography variant="h4" color="primary">
                    RMSE: 0.412
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Top 40% of all submissions
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph>
                  This result was achieved using our Multiple Linear Regression 2 model, which incorporated:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Overall Quality (OverallQual)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Above Ground Living Area (GrLivArea)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Year Built (YearBuilt)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Total Basement Square Footage (TotalBsmtSF)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Garage Capacity (GarageCars)
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        {/* Advanced Techniques */}
        <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Potential for Advanced Techniques
          </Typography>
          <Typography variant="body1" paragraph>
            While our analysis was limited to techniques covered in DS 6371, top-performing Kaggle submissions 
            typically employ more advanced methods:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Gradient Boosting
                  </Typography>
                  <Typography variant="body2">
                    XGBoost, LightGBM, and CatBoost models
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Ensemble Models
                  </Typography>
                  <Typography variant="body2">
                    Stacking and blending multiple models
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Neural Networks
                  </Typography>
                  <Typography variant="body2">
                    Deep learning approaches for regression
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Advanced Feature Engineering
                  </Typography>
                  <Typography variant="body2">
                    Creating complex interaction features
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button 
              variant="contained" 
              color="primary"
              href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques/discussion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Top Kaggle Approaches
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default KaggleInfoPage;