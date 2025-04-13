import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CodeIcon from '@mui/icons-material/Code';
import DatasetIcon from '@mui/icons-material/Storage';
import DescriptionIcon from '@mui/icons-material/Description';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FileIcon from '@mui/icons-material/InsertDriveFile';

const DownloadsPage = () => {
  // File categories and their items
  const downloadItems = [
    {
      category: 'Datasets',
      icon: <DatasetIcon />,
      description: 'Raw data files used in the analysis',
      items: [
        {
          name: 'train.csv',
          description: 'Training dataset with 1,460 observations and 81 variables (including SalePrice)',
          size: '337 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/data/house-prices-advanced-regression-techniques/train.csv'
        },
        {
          name: 'test.csv',
          description: 'Test dataset with 1,459 observations and 80 variables (excluding SalePrice)',
          size: '328 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/data/house-prices-advanced-regression-techniques/test.csv'
        }
      ]
    },
    {
      category: 'R Scripts',
      icon: <CodeIcon />,
      description: 'R code files for data analysis and visualization',
      items: [
        {
          name: 'analysis_century21.R',
          description: 'R script for the Century 21 neighborhood analysis',
          size: '14 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/R/analysis_century21.R'
        },
        {
          name: 'analysis_allneighborhoods.R',
          description: 'R script for the all neighborhoods predictive analysis',
          size: '18 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/R/analysis_allneighborhoods.R'
        },
        {
          name: 'functions.R',
          description: 'Helper functions used in the analysis',
          size: '5 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/R/functions.R'
        }
      ]
    },
    {
      category: 'Documentation',
      icon: <DescriptionIcon />,
      description: 'Documentation files explaining the data and analysis',
      items: [
        {
          name: 'DS_6371_Project_Jonathan_Samson.Rmd',
          description: 'R Markdown file containing the full analysis',
          size: '45 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/DS_6371_Project_Jonathan_Samson.Rmd'
        },
        {
          name: 'data_dictionary.md',
          description: 'Documentation of dataset variables',
          size: '8 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/docs/data_dictionary.md'
        }
      ]
    },
    {
      category: 'Results',
      icon: <AnalyticsIcon />,
      description: 'Result files from the analysis',
      items: [
        {
          name: 'submission.csv',
          description: 'Kaggle submission file with predicted prices',
          size: '43 KB',
          url: 'https://github.com/jonx0037/DS_6371_Project/raw/main/outputs/submissions/submission.csv'
        }
      ]
    }
  ];

  const handleDownload = (url, filename) => {
    // This function could be enhanced with analytics tracking if needed
    console.log(`Downloading ${filename} from ${url}`);
    // The actual download happens via the href attribute in the Button
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          Downloads
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
          Access datasets, code, and documentation from the project
        </Typography>
        
        {/* Download All Button */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Download Complete Project
            </Typography>
            <Typography variant="body1">
              Get all project files including datasets, R scripts, and documentation in a single ZIP archive.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<DownloadIcon />}
            href="https://github.com/jonx0037/DS_6371_Project/archive/refs/heads/main.zip"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ minWidth: '200px' }}
          >
            Download ZIP
          </Button>
        </Paper>
        
        {/* Individual File Categories */}
        {downloadItems.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 5 }}>
            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
              <Grid item>
                {category.icon}
              </Grid>
              <Grid item>
                <Typography variant="h5" component="h2">
                  {category.category}
                </Typography>
              </Grid>
            </Grid>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              {category.description}
            </Typography>
            
            <Grid container spacing={3}>
              {category.items.map((item, itemIndex) => (
                <Grid item xs={12} md={6} key={itemIndex}>
                  <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <Grid item>
                          <FileIcon color="primary" />
                        </Grid>
                        <Grid item>
                          <Typography variant="h6">
                            {item.name}
                          </Typography>
                        </Grid>
                      </Grid>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {item.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          Size: {item.size}
                        </Typography>
                        
                        <Button 
                          variant="outlined" 
                          size="small" 
                          startIcon={<DownloadIcon />}
                          href={item.url}
                          download
                          onClick={() => handleDownload(item.url, item.name)}
                        >
                          Download
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            {categoryIndex < downloadItems.length - 1 && (
              <Divider sx={{ mt: 4 }} />
            )}
          </Box>
        ))}
        
        {/* GitHub Repository Link */}
        <Paper elevation={3} sx={{ p: 3, mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Access the Full GitHub Repository
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            For the most up-to-date files, version history, and to explore the complete codebase, visit the GitHub repository.
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            href="https://github.com/jonx0037/DS_6371_Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default DownloadsPage;