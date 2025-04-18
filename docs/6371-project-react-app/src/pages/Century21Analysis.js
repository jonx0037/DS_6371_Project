import React from 'react';
import { Typography, Box, Paper, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';
import { Bar, Scatter } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Century21Analysis = () => {
  // Data for bar chart showing neighborhood comparisons
  const neighborhoodData = {
    labels: ['NAmes', 'Edwards', 'BrkSide'],
    datasets: [
      {
        label: 'Mean Price ($)',
        data: [145847, 128202, 124834],
        backgroundColor: 'rgba(53, 76, 161, 0.8)',
      },
      {
        label: 'Mean Living Area (sq ft × 100)',
        data: [11.80, 11.69, 11.66],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      }
    ],
  };

  // Data for scatter plot showing price vs area by neighborhood
  const scatterData = {
    datasets: [
      {
        label: 'NAmes',
        data: [
          { x: 8, y: 100000 },
          { x: 10, y: 125000 },
          { x: 12, y: 150000 },
          { x: 14, y: 175000 },
          { x: 16, y: 200000 },
        ],
        backgroundColor: 'rgba(53, 76, 161, 0.5)',
      },
      {
        label: 'Edwards',
        data: [
          { x: 8, y: 95000 },
          { x: 10, y: 110000 },
          { x: 12, y: 125000 },
          { x: 14, y: 140000 },
          { x: 16, y: 155000 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'BrkSide',
        data: [
          { x: 8, y: 90000 },
          { x: 10, y: 120000 },
          { x: 12, y: 150000 },
          { x: 14, y: 180000 },
          { x: 16, y: 210000 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Century 21 Ames Neighborhood Analysis
      </Typography>
      
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Key Findings</Typography>
        <Typography paragraph>
          Our analysis examined how sale prices of houses relate to the square footage of living area
          across three neighborhoods in Ames, Iowa: NAmes, Edwards, and BrkSide. We found that the relationship
          between price and living area varies significantly by neighborhood.
        </Typography>
        
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Overall Price Distribution</Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">70.21%</Typography>
                <Typography variant="body1">Homes sell for less than $200,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">27.33%</Typography>
                <Typography variant="body1">Homes sell between $200,000-$400,000</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">1.92%</Typography>
                <Typography variant="body1">Homes sell for more than $400,000</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Neighborhood Comparison</Typography>
            <Box sx={{ height: 350 }}>
              <Bar 
                data={neighborhoodData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Value'
                      }
                    },
                    x: {
                      title: {
                        display: true,
                        text: 'Neighborhood'
                      }
                    }
                  }
                }}
              />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Price vs. Living Area</Typography>
            <Box sx={{ height: 350 }}>
              <Scatter
                data={scatterData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      title: {
                        display: true,
                        text: 'Sale Price ($)'
                      }
                    },
                    x: {
                      title: {
                        display: true,
                        text: 'Living Area (100 sq ft)'
                      }
                    }
                  }
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      
      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Best Model Results</Typography>
        <Typography paragraph>
          Our analysis found that the relationship between living area and price varies significantly by neighborhood. 
          The interaction model shows:
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent>
                <Typography variant="h6" gutterBottom>Edwards</Typography>
                <Typography variant="body1" paragraph>
                  Each additional 100 sq ft increases price by <strong>$2,975</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  (Reference neighborhood)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent>
                <Typography variant="h6" gutterBottom>BrkSide</Typography>
                <Typography variant="body1" paragraph>
                  Each additional 100 sq ft increases price by <strong>$8,716</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ($2,975 + $5,741)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card raised>
              <CardContent>
                <Typography variant="h6" gutterBottom>NAmes</Typography>
                <Typography variant="body1" paragraph>
                  Each additional 100 sq ft increases price by <strong>$5,432</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ($2,975 + $2,457)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" gutterBottom>Interactive Exploration</Typography>
        <Typography paragraph>
          Explore the relationship between house prices and living area interactively with our Shiny dashboard:
        </Typography>
        
        <Box sx={{ width: '100%', height: 600, border: '1px solid #ddd', borderRadius: 1, overflow: 'hidden' }}>
          <iframe 
            src="https://m15n4i-jonathan0rocha.shinyapps.io/DS_6371_Project_Jonathan_Samson/" 
            width="100%" 
            height="100%" 
            title="Century 21 Ames Analysis"
            frameBorder="0"
          />
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Note: The Shiny app will be deployed and linked here after completion.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Century21Analysis;
