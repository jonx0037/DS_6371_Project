import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SchoolIcon from '@mui/icons-material/School';
import DownloadIcon from '@mui/icons-material/Download';

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=80')`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            DS 6371 Project: House Prices Analysis
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            A comprehensive analysis of housing prices in Ames, Iowa using
            advanced regression techniques.
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="/data-methodology"
            sx={{ mt: 2 }}
          >
            Explore the Analysis
          </Button>
        </Box>
      </Paper>

      {/* Project Overview */}
      <Container>
        <Typography variant="h4" component="h2" className="section-title" gutterBottom>
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph>
          This project explores the Ames Housing dataset, which contains information on residential
          homes in Ames, Iowa. The dataset includes 79 explanatory variables describing various aspects
          of the homes, with the goal of predicting the final sale price of each property.
        </Typography>
        <Typography variant="body1" paragraph>
          The analysis is divided into two main parts, focusing on different aspects of the housing market
          in Ames, Iowa.
        </Typography>

        {/* Analysis Cards */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Analysis 1 Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <HomeWorkIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Analysis 1: Century 21 Neighborhoods
                </Typography>
                <Typography variant="body1" paragraph>
                  Examining how house sale prices relate to living area (GrLivArea) in three specific
                  neighborhoods (NAmes, Edwards, and BrkSide) for Century 21 Ames.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Key Finding:</strong> The relationship between living area and sale price
                  varies significantly by neighborhood, with NAmes showing the strongest price increase
                  per square foot of additional living area.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to="/analysis-century21"
                >
                  View Analysis
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Analysis 2 Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <BarChartIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Analysis 2: All Neighborhoods Prediction
                </Typography>
                <Typography variant="body1" paragraph>
                  Building predictive models for house prices across all neighborhoods in Ames, Iowa
                  using multiple regression techniques.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Key Finding:</strong> Our comprehensive model identified Overall Quality,
                  Above Ground Living Area, Year Built, Total Basement Square Footage, and Garage
                  Capacity as the most influential factors in determining house prices.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to="/analysis-all-neighborhoods"
                >
                  View Analysis
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        {/* Additional Resources */}
        <Typography variant="h4" component="h2" className="section-title" gutterBottom>
          Additional Resources
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 3 }}>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/downloads"
            startIcon={<DownloadIcon />}
            sx={{ flex: 1 }}
          >
            Download Datasets & Code
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/kaggle-info"
            startIcon={<SchoolIcon />}
            sx={{ flex: 1 }}
          >
            Kaggle Competition Info
          </Button>
          <Button
            variant="outlined"
            component="a"
            href="https://github.com/jonx0037/DS_6371_Project"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ flex: 1 }}
          >
            GitHub Repository
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;