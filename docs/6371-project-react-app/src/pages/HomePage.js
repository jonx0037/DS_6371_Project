import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
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
git push -f origin mainimport PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// Import Peruna mascot image for hero section
import perunaR from '../theme-assets/img/PerunaR.png';
import smuLogoFormal from '../theme-assets/img/SMU Logo Outlined_Formal_weight.png';

// Import the PDF file path
const pdfFilePath = process.env.PUBLIC_URL + '/assets/Final_Project_Jon_Samson_Group_2.pdf';

const HomePage = () => {
  return (
    <Box>
      <SEO 
        title="Home" 
        description="An analysis of housing prices in Ames, Iowa using advanced regression techniques. Explore our Century 21 neighborhood analysis and comprehensive predictive models."
        keywords="Ames housing data, house price prediction, regression analysis, data science project, SMU"
        url="/"
      />
      
      {/* Hero Section with SMU branding */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'var(--smu-blue)',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(rgba(53, 76, 161, 0.85), rgba(53, 76, 161, 0.9)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=80')`,
          borderRadius: 0,
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: 'relative',
              py: { xs: 4, md: 6 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1, zIndex: 2 }}>
              <img
                src={smuLogoFormal}
                alt="Southern Methodist University formal logo with blue outline"
                style={{ 
                  height: '60px', 
                  marginBottom: '20px',
                  filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))'
                }}
              />
              <Typography 
                component="h1" 
                variant="h3" 
                color="inherit" 
                gutterBottom 
                sx={{ 
                  fontFamily: 'var(--smu-serif)',
                  fontWeight: 700,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                House Prices Analysis
              </Typography>
              <Typography 
                variant="h5" 
                color="inherit" 
                paragraph
                sx={{
                  fontFamily: 'var(--smu-sans-serif)',
                  maxWidth: { md: '80%' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                A comprehensive analysis of housing prices in Ames, Iowa using
                advanced regression techniques.
              </Typography>
              <Button
                variant="contained"
                component={RouterLink}
                to="/data-methodology"
                sx={{ 
                  mt: 2,
                  backgroundColor: 'var(--smu-red)',
                  '&:hover': {
                    backgroundColor: '#a10d25',
                  },
                  fontFamily: 'var(--smu-sans-serif)',
                  fontWeight: 500
                }}
              >
                Explore the Analysis
              </Button>
            </Box>
            
            {/* Peruna Mascot Image */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'block' },
                position: { md: 'relative' },
                width: { md: '300px' },
                height: { md: '300px' },
                textAlign: 'center',
                zIndex: 1
              }}
            >
              <img
                src={perunaR}
                alt="SMU Peruna mascot in red and blue colors, the official mustang mascot of Southern Methodist University"
                style={{ 
                  height: '100%',
                  filter: 'drop-shadow(3px 3px 5px rgba(0,0,0,0.3))'
                }}
              />
            </Box>
          </Box>
        </Container>
      </Paper>

      {/* Project Overview */}
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            fontFamily: 'var(--smu-serif)',
            color: 'var(--smu-blue)',
            borderBottom: '2px solid var(--smu-red)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}
        >
          Project Overview
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'var(--smu-sans-serif)' }}>
          This project explores the Ames Housing dataset, which contains information on residential
          homes in Ames, Iowa. The dataset includes 79 explanatory variables describing various aspects
          of the homes, with the goal of predicting the final sale price of each property.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontFamily: 'var(--smu-sans-serif)' }}>
          The analysis is divided into two main parts, focusing on different aspects of the housing market
          in Ames, Iowa.
        </Typography>

        {/* Analysis Cards */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Analysis 1 Card */}
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent>
                <HomeWorkIcon sx={{ fontSize: 40, mb: 2, color: 'var(--smu-blue)' }} />
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontFamily: 'var(--smu-serif)', color: 'var(--smu-blue)' }}
                >
                  Analysis 1: Century 21 Neighborhoods
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontFamily: 'var(--smu-sans-serif)' }}>
                  Examining how house sale prices relate to living area (GrLivArea) in three specific
                  neighborhoods (NAmes, Edwards, and BrkSide) for Century 21 Ames.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    backgroundColor: 'rgba(53, 76, 161, 0.05)',
                    padding: 2,
                    borderLeft: '3px solid var(--smu-blue)',
                    fontFamily: 'var(--smu-sans-serif)'
                  }}
                >
                  <strong>Key Finding:</strong> The relationship between living area and sale price
                  varies significantly by neighborhood, with NAmes showing the strongest price increase
                  per square foot of additional living area.
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <CardActions>
                <Button
                  size="small"
                  sx={{ color: 'var(--smu-blue)' }}
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
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
              }
            }}>
              <CardContent>
                <BarChartIcon sx={{ fontSize: 40, mb: 2, color: 'var(--smu-blue)' }} />
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontFamily: 'var(--smu-serif)', color: 'var(--smu-blue)' }}
                >
                  Analysis 2: All Neighborhoods Prediction
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontFamily: 'var(--smu-sans-serif)' }}>
                  Building predictive models for house prices across all neighborhoods in Ames, Iowa
                  using multiple regression techniques.
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    backgroundColor: 'rgba(53, 76, 161, 0.05)',
                    padding: 2,
                    borderLeft: '3px solid var(--smu-blue)',
                    fontFamily: 'var(--smu-sans-serif)'
                  }}
                >
                  <strong>Key Finding:</strong> Our comprehensive model identified Overall Quality,
                  Above Ground Living Area, Year Built, Total Basement Square Footage, and Garage
                  Capacity as the most influential factors in determining house prices.
                </Typography>
              </CardContent>
              <Box sx={{ flexGrow: 1 }} />
              <CardActions>
                <Button
                  size="small"
                  sx={{ color: 'var(--smu-blue)' }}
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
        
        {/* Project Presentation PDF Section */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            fontFamily: 'var(--smu-serif)',
            color: 'var(--smu-blue)',
            borderBottom: '2px solid var(--smu-red)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}
        >
          Project Presentation
        </Typography>
        
        <Box 
          sx={{ 
            mt: 3, 
            p: 3, 
            backgroundColor: 'rgba(53, 76, 161, 0.05)', 
            borderRadius: 2,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mb: { xs: 2, sm: 0 } }}>
            <Typography variant="h6" component="h3" sx={{ fontFamily: 'var(--smu-serif)', color: 'var(--smu-blue)' }}>
              Final Project Presentation Slides
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'var(--smu-sans-serif)' }}>
              View or download our comprehensive project presentation with detailed analysis and findings.
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={<PictureAsPdfIcon />}
              component="a"
              href={pdfFilePath}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                backgroundColor: 'var(--smu-red)',
                '&:hover': {
                  backgroundColor: '#a10d25',
                },
                fontFamily: 'var(--smu-sans-serif)',
                fontWeight: 500
              }}
            >
              View Presentation PDF
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* Additional Resources */}
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{
            fontFamily: 'var(--smu-serif)',
            color: 'var(--smu-blue)',
            borderBottom: '2px solid var(--smu-red)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}
        >
          Additional Resources
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2} 
          sx={{ mt: 3 }}
        >
          <Button
            variant="outlined"
            component={RouterLink}
            to="/downloads"
            startIcon={<DownloadIcon />}
            sx={{ 
              flex: 1, 
              borderColor: 'var(--smu-blue)',
              color: 'var(--smu-blue)',
              '&:hover': {
                borderColor: 'var(--smu-red)',
                color: 'var(--smu-red)',
                backgroundColor: 'rgba(200, 16, 46, 0.05)'
              }
            }}
          >
            Download Datasets & Code
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/kaggle-info"
            startIcon={<SchoolIcon />}
            sx={{ 
              flex: 1, 
              borderColor: 'var(--smu-blue)',
              color: 'var(--smu-blue)',
              '&:hover': {
                borderColor: 'var(--smu-red)',
                color: 'var(--smu-red)',
                backgroundColor: 'rgba(200, 16, 46, 0.05)'
              }
            }}
          >
            Kaggle Competition Info
          </Button>
          <Button
            variant="outlined"
            component="a"
            href="https://github.com/jonx0037/DS_6371_Project"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              flex: 1, 
              borderColor: 'var(--smu-blue)',
              color: 'var(--smu-blue)',
              '&:hover': {
                borderColor: 'var(--smu-red)',
                color: 'var(--smu-red)',
                backgroundColor: 'rgba(200, 16, 46, 0.05)'
              }
            }}
          >
            GitHub Repository
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;