import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Avatar, Divider, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CodeIcon from '@mui/icons-material/Code';

const AboutPage = () => {
  // Author information
  const authors = [
    {
      name: 'Jonathan Rocha',
      role: 'Data Scientist & Developer',
      bio: 'Full-stack web developer specializing in React web applications. BA in History from Texas A&M University and MA in English from Texas A&M University-Central Texas. Experienced in predictive modeling and data visualization.',
      avatar: process.env.PUBLIC_URL + '/assets/img/jr-profile-img.png',
      github: 'https://github.com/jonx0037',
      linkedin: 'https://www.linkedin.com/in/jonathan-rocha-atx/',
      email: 'jrocha@smu.edu',
      contributions: [
        'Development of the Century 21 neighborhood analysis',
        'Visualization of housing data relationships',
        'GitHub Pages website implementation',
        'Project documentation'
      ]
    },
    {
      name: 'Samson Akomolafe',
      role: 'Data Analyst & Financial Consultant', 
      bio: 'Graduate student at Southern Methodist University pursuing an MS in Data Science. With a strong background in accounting and finance, Samson holds a BSc in Accounting from the University of Lagos Nigeria and is both a COBIT-5 and Sage X3 consultant. His professional journey includes over 15 years of experience in auditing and financial consulting, having worked with Ike & Partner as a Partner-Auditor. Since moving to the USA in 2017, he has been working as a freelance consultant and paralegal.',
      avatar: process.env.PUBLIC_URL + '/assets/img/sa-profile-img.png',
      github: 'https://github.com/samsonakomolafe',
      linkedin: 'https://www.linkedin.com/in/samson-olujide-a-31223a2b/',
      email: 'sakomolafe@mail.smu.edu',
      contributions: [
        'Development of predictive models for all neighborhoods',
        'Statistical validity testing and model diagnostics',
        'Feature importance analysis',
        'Kaggle submission preparation'
      ]
    }
  ];

  // Project information
  const project = {
    course: 'DS 6371: Statistical Analysis with R',
    university: 'Southern Methodist University',
    term: 'Spring 2025',
    technologies: [
      {
        name: 'R Programming',
        description: 'Primary language for statistical analysis'
      },
      {
        name: 'RStudio',
        description: 'Development environment'
      },
      {
        name: 'R Markdown',
        description: 'Documentation and reporting'
      },
      {
        name: 'Shiny',
        description: 'Interactive visualizations'
      },
      {
        name: 'React',
        description: 'Web development framework for project showcase'
      },
      {
        name: 'GitHub Pages',
        description: 'Web hosting platform'
      }
    ]
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom className="section-title">
          About the Project & Authors
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
          Meet the team behind the DS 6371 House Prices Analysis
        </Typography>
        
        {/* Project Information */}
        <Card sx={{ mb: 5 }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Project Information
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Course
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 4 }}>
                    {project.course}
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    University
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 4 }}>
                    {project.university}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" gutterBottom>
                    <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Term
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 4 }}>
                    {project.term}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Technologies Used
                </Typography>
                <Grid container spacing={2}>
                  {project.technologies.map((tech, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="subtitle1">
                          <CodeIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                          {tech.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                          {tech.description}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Author Profiles */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 3 }}>
          Meet the Authors
        </Typography>
        
        <Grid container spacing={4}>
          {authors.map((author, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 3, alignItems: { xs: 'center', sm: 'flex-start' } }}>
                    <Avatar
                      alt={author.name}
                      src={author.avatar}
                      sx={{ 
                        width: 100, 
                        height: 100, 
                        mb: { xs: 2, sm: 0 }, 
                        mr: { sm: 3 },
                        bgcolor: 'primary.main'
                      }}
                    >
                      {author.name.charAt(0)}
                    </Avatar>
                    
                    <Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {author.name}
                      </Typography>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {author.role}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <IconButton 
                          component="a" 
                          href={author.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          size="small"
                          aria-label="GitHub"
                        >
                          <GitHubIcon />
                        </IconButton>
                        <IconButton 
                          component="a" 
                          href={author.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          size="small"
                          aria-label="LinkedIn"
                        >
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton 
                          component="a" 
                          href={`mailto:${author.email}`}
                          size="small"
                          aria-label="Email"
                        >
                          <EmailIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {author.bio}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="h6" gutterBottom>
                    Project Contributions
                  </Typography>
                  <ul>
                    {author.contributions.map((contribution, i) => (
                      <li key={i}>
                        <Typography variant="body2">
                          {contribution}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Acknowledgements */}
        <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 5, mb: 3 }}>
          Acknowledgements
        </Typography>
        
        <Card>
          <CardContent>
            <Typography variant="body1" paragraph>
              We would like to express our gratitude to:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Our professor for guidance and support throughout the project
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Dean De Cock for compiling the original Ames Housing dataset
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Kaggle for hosting the competition and providing a platform for learning
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The R community for developing and maintaining the packages used in this analysis
                </Typography>
              </li>
            </ul>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              This project was completed as part of the requirements for DS 6371 at Southern Methodist University.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutPage;