import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/**
 * Breadcrumbs component that displays navigation path
 * 
 * @param {Array} breadcrumbs - Array of objects with name and url properties
 * @param {string} className - Optional CSS class name
 * @returns {JSX.Element} - Breadcrumbs navigation component
 */
const Breadcrumbs = ({ breadcrumbs, className }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }
  
  return (
    <Box 
      className={className}
      sx={{ 
        mb: 3,
        bgcolor: 'background.paper',
        borderRadius: 1,
        p: 1.5,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}
      role="navigation"
      aria-label="breadcrumb"
    >
      <MUIBreadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return isLast ? (
            <Typography 
              key={crumb.name} 
              color="text.primary"
              aria-current="page"
            >
              {crumb.name}
            </Typography>
          ) : (
            <Link
              key={crumb.name}
              component={RouterLink}
              to={crumb.url}
              underline="hover"
              color="inherit"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              {index === 0 ? (
                <>
                  <HomeIcon sx={{ mr: 0.5, fontSize: '0.9rem' }} />
                  {crumb.name}
                </>
              ) : (
                crumb.name
              )}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;