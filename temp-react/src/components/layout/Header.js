import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

// Navigation items
const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Analysis 1: Century 21', path: '/analysis-century21' },
  { title: 'Analysis 2: All Neighborhoods', path: '/analysis-all-neighborhoods' },
  { title: 'Data & Methodology', path: '/data-methodology' },
  { title: 'Downloads', path: '/downloads' },
  { title: 'Kaggle Competition', path: '/kaggle-info' },
  { title: 'About', path: '/about' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DS 6371 Project
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            component={RouterLink}
            to={item.path}
            key={item.title}
            sx={{
              backgroundColor: isActive(item.path) ? 'rgba(44, 127, 184, 0.1)' : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(44, 127, 184, 0.05)',
              },
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  DS 6371 Project
                </Typography>
                <IconButton color="inherit" component={RouterLink} to="/">
                  <HomeIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  sx={{
                    flexGrow: 1,
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <HomeIcon sx={{ mr: 1 }} />
                  DS 6371 Project: House Prices Analysis
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  {navItems.map((item) => (
                    item.path !== '/' && (
                      <Button
                        key={item.title}
                        component={RouterLink}
                        to={item.path}
                        sx={{
                          color: '#fff',
                          mx: 0.5,
                          backgroundColor: isActive(item.path) ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        }}
                      >
                        {item.title}
                      </Button>
                    )
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;