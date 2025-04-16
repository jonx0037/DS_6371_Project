import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import NeighborhoodPricePlot from '../components/visualizations/NeighborhoodPricePlot';
import ModelComparisonChart from '../components/visualizations/ModelComparisonChart';
import FeatureImportanceChart from '../components/visualizations/FeatureImportanceChart';

const VisualizationsPage = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Data Visualizations
      </Typography>
      <Typography variant="body1" paragraph>
        Interactive visualizations from our statistical analysis of the Ames Housing Dataset.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Neighborhood Price Analysis</Typography>
            <NeighborhoodPricePlot />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Model Comparison</Typography>
            <ModelComparisonChart />
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Feature Importance</Typography>
            <FeatureImportanceChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisualizationsPage;