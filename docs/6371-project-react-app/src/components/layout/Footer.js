import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';

// Import the university seal
import universitySeal from '../../theme-assets/img/UniversitySeal.png';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--smu-footer-bg)',
        color: 'white',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* University Seal - Centered at top of footer */}
        <Box className="university-seal-container" sx={{ mb: 4 }}>
          <img 
            src={universitySeal} 
            alt="Southern Methodist University Seal" 
            className="smu-seal" 
            style={{ width: '100px' }}
          />
        </Box>
        
        {/* Main Footer Content */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* Project Information */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
              DS 6371 Project
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1 }}>
              House Prices Analysis using advanced regression techniques.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Southern Methodist University, Spring 2025
            </Typography>
            
            {/* SMU Primary Link */}
            <Stack direction="row" alignItems="center" sx={{ mt: 2 }}>
              <HomeIcon sx={{ fontSize: '1rem', mr: 1, color: 'rgba(255,255,255,0.7)' }} />
              <Link 
                href="https://www.smu.edu"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.875rem'
                }}
              >
                Southern Methodist University
              </Link>
            </Stack>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              <Link 
                href="/DS_6371_Project/downloads" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                Downloads
              </Link>
              <Link 
                href="https://www.kaggle.com/c/house-prices-advanced-regression-techniques" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <SchoolIcon sx={{ fontSize: '1rem', mr: 1 }} />
                Kaggle Competition
              </Link>
              <Link 
                href="https://github.com/jonx0037/DS_6371_Project" 
                target="_blank" 
                rel="noopener noreferrer" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <GitHubIcon sx={{ fontSize: '1rem', mr: 1 }} />
                GitHub Repository
              </Link>
            </Stack>
          </Grid>
          
          {/* Authors */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
              Authors
            </Typography>
            <Box>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, fontWeight: 500 }}>
                Jonathan Rocha
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, fontSize: '0.815rem' }}>
                Full-stack Web Developer
              </Typography>
              <Link 
                href="mailto:jrocha@smu.edu" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.815rem',
                  display: 'block',
                  mb: 2
                }}
              >
                jrocha@smu.edu
              </Link>
              
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, fontWeight: 500 }}>
                Samson Akomolafe
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, fontSize: '0.815rem' }}>
                Data Analyst & Financial Consultant
              </Typography>
              <Link 
                href="mailto:sakomolafe@mail.smu.edu" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  '&:hover': { color: 'white' },
                  fontSize: '0.815rem',
                  display: 'block'
                }}
              >
                sakomolafe@mail.smu.edu
              </Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 4, mb: 3, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        {/* Copyright */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.75rem'
          }}
        >
          © {new Date().getFullYear()} Jonathan Rocha & Samson Akomolafe | Southern Methodist University
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;