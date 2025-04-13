import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              DS 6371 Project
            </Typography>
            <Typography variant="body2" color="text.secondary">
              House Prices Analysis using regression techniques.
              <br />
              Southern Methodist University, Spring 2025.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Resources
            </Typography>
            <Typography variant="body2">
              <Link href="/downloads" color="inherit" underline="hover">
                Downloads
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                underline="hover">
                Kaggle Competition
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="https://github.com/jonx0037/DS_6371_Project" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                underline="hover">
                <GitHubIcon fontSize="small" sx={{ mr: 0.5, verticalAlign: 'middle' }} />
                GitHub Repository
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Authors
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Jonathan Rocha
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Samson Akomolafe
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 3, mb: 2 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Jonathan Rocha & Samson Akomolafe. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;