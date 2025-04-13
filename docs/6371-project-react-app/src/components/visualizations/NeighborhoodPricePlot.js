import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { Box, Card, CardContent, Typography, FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material';

// This component will simulate the Shiny app functionality in the R Markdown file
// It shows the relationship between house prices and living area by neighborhood

// Sample data based on the Century 21 neighborhood analysis
// In a real implementation, this would be loaded from a JSON file
const sampleData = {
  NAmes: {
    GrLivArea: [854, 1188, 1288, 1344, 1442, 1532, 1656, 1774, 1800, 1880, 1936, 2010],
    SalePrice: [115000, 153500, 161500, 170000, 166000, 157000, 181000, 191000, 188000, 195000, 218000, 246000],
    color: '#1f77b4'
  },
  Edwards: {
    GrLivArea: [733, 810, 968, 1022, 1126, 1264, 1362, 1444, 1744, 1836, 2073, 2176],
    SalePrice: [85000, 86000, 87550, 84500, 116000, 142500, 130000, 123000, 169900, 194500, 159000, 137500],
    color: '#ff7f0e'
  },
  BrkSide: {
    GrLivArea: [720, 796, 854, 988, 1052, 1142, 1212, 1326, 1442, 1631, 1768, 2269],
    SalePrice: [82000, 86000, 115000, 118000, 127000, 125000, 145000, 158000, 155000, 176000, 196000, 190000],
    color: '#2ca02c'
  }
};

const NeighborhoodPricePlot = () => {
  // State for user selections (similar to Shiny app inputs)
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState({
    NAmes: true,
    Edwards: true,
    BrkSide: true
  });
  const [showRegression, setShowRegression] = useState(true);
  const [showConfidence, setShowConfidence] = useState(true);
  
  // Handler for neighborhood selection changes
  const handleNeighborhoodChange = (event) => {
    setSelectedNeighborhoods({
      ...selectedNeighborhoods,
      [event.target.name]: event.target.checked
    });
  };

  // Prepare plot data based on user selections
  const plotData = [];
  
  Object.keys(selectedNeighborhoods).forEach(neighborhood => {
    if (selectedNeighborhoods[neighborhood]) {
      // Add scatter plot for each selected neighborhood
      plotData.push({
        x: sampleData[neighborhood].GrLivArea,
        y: sampleData[neighborhood].SalePrice,
        type: 'scatter',
        mode: 'markers',
        name: neighborhood,
        marker: {
          color: sampleData[neighborhood].color,
          size: 8
        }
      });
      
      // Add regression line if requested
      if (showRegression) {
        // Simple linear regression calculation
        // In a real implementation, coefficients would be pre-calculated or calculated using a library
        const x = sampleData[neighborhood].GrLivArea;
        const y = sampleData[neighborhood].SalePrice;
        
        // Calculate mean of x and y
        const xMean = x.reduce((a, b) => a + b, 0) / x.length;
        const yMean = y.reduce((a, b) => a + b, 0) / y.length;
        
        // Calculate coefficients
        let numerator = 0;
        let denominator = 0;
        
        for (let i = 0; i < x.length; i++) {
          numerator += (x[i] - xMean) * (y[i] - yMean);
          denominator += (x[i] - xMean) * (x[i] - xMean);
        }
        
        const slope = numerator / denominator;
        const intercept = yMean - slope * xMean;
        
        // Create x values for line
        const minX = Math.min(...x);
        const maxX = Math.max(...x);
        const lineX = [minX, maxX];
        const lineY = [slope * minX + intercept, slope * maxX + intercept];
        
        // Add regression line
        plotData.push({
          x: lineX,
          y: lineY,
          type: 'scatter',
          mode: 'lines',
          name: `${neighborhood} Regression`,
          line: {
            color: sampleData[neighborhood].color,
            width: 2
          },
          showlegend: false
        });
        
        // Add confidence interval if requested
        if (showConfidence) {
          // In a real implementation, this would be calculated properly
          // For this demo, we'll just show lines 10% above and below the regression line
          plotData.push({
            x: lineX,
            y: [lineY[0] * 1.1, lineY[1] * 1.1],
            type: 'scatter',
            mode: 'lines',
            name: `${neighborhood} Upper CI`,
            line: {
              color: sampleData[neighborhood].color,
              width: 1,
              dash: 'dash'
            },
            showlegend: false
          });
          
          plotData.push({
            x: lineX,
            y: [lineY[0] * 0.9, lineY[1] * 0.9],
            type: 'scatter',
            mode: 'lines',
            name: `${neighborhood} Lower CI`,
            line: {
              color: sampleData[neighborhood].color,
              width: 1,
              dash: 'dash'
            },
            fill: 'tonexty',
            fillcolor: `rgba(${sampleData[neighborhood].color.replace('rgb', '').replace('(', '').replace(')', '')}, 0.1)`,
            showlegend: false
          });
        }
      }
    }
  });
  
  // Plot layout
  const layout = {
    title: 'Sale Price vs. Living Area by Neighborhood',
    xaxis: {
      title: 'Above Grade (Ground) Living Area (sq ft)'
    },
    yaxis: {
      title: 'Sale Price ($)',
      tickformat: '$,.0f'
    },
    hovermode: 'closest',
    legend: {
      x: 0,
      y: 1
    },
    autosize: true,
    height: 500,
    margin: {
      l: 60,
      r: 30,
      b: 60,
      t: 80,
      pad: 4
    }
  };
  
  // Generate neighborhood stats for display
  const generateNeighborhoodStats = () => {
    const stats = [];
    
    Object.keys(selectedNeighborhoods).forEach(neighborhood => {
      if (selectedNeighborhoods[neighborhood]) {
        const prices = sampleData[neighborhood].SalePrice;
        const areas = sampleData[neighborhood].GrLivArea;
        
        stats.push({
          neighborhood,
          count: prices.length,
          meanPrice: prices.reduce((a, b) => a + b, 0) / prices.length,
          medianPrice: [...prices].sort((a, b) => a - b)[Math.floor(prices.length / 2)],
          meanArea: areas.reduce((a, b) => a + b, 0) / areas.length,
          medianArea: [...areas].sort((a, b) => a - b)[Math.floor(areas.length / 2)],
          pricePerSqFt: (prices.reduce((a, b) => a + b, 0) / prices.length) / (areas.reduce((a, b) => a + b, 0) / areas.length)
        });
      }
    });
    
    return stats;
  };
  
  const neighborhoodStats = generateNeighborhoodStats();
  
  return (
    <Card className="visualization-container">
      <CardContent>
        <Typography variant="h5" component="h2" className="section-title" gutterBottom>
          House Price vs. Living Area by Neighborhood
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Plot
              data={plotData}
              layout={layout}
              style={{ width: '100%' }}
              useResizeHandler={true}
              config={{ responsive: true }}
            />
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Options
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedNeighborhoods.NAmes}
                      onChange={handleNeighborhoodChange}
                      name="NAmes"
                    />
                  }
                  label="NAmes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedNeighborhoods.Edwards}
                      onChange={handleNeighborhoodChange}
                      name="Edwards"
                    />
                  }
                  label="Edwards"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedNeighborhoods.BrkSide}
                      onChange={handleNeighborhoodChange}
                      name="BrkSide"
                    />
                  }
                  label="BrkSide"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showRegression}
                      onChange={(e) => setShowRegression(e.target.checked)}
                      name="showRegression"
                    />
                  }
                  label="Show Regression Line"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={showConfidence}
                      onChange={(e) => setShowConfidence(e.target.checked)}
                      name="showConfidence"
                      disabled={!showRegression}
                    />
                  }
                  label="Show Confidence Interval"
                />
              </FormGroup>
            </Box>
          </Grid>
        </Grid>
        
        {/* Neighborhood Statistics Table */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Neighborhood Statistics
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Neighborhood</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Count</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Mean Price</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Median Price</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Mean Area</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Median Area</th>
                  <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>Price per sq ft</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoodStats.map((stat) => (
                  <tr key={stat.neighborhood}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{stat.neighborhood}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>{stat.count}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>${stat.meanPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>${stat.medianPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>{stat.meanArea.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>{stat.medianArea.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                    <td style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #ddd' }}>${stat.pricePerSqFt.toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Note: This interactive visualization is a web-based recreation of the R Shiny app from the original analysis.
            For the full functionality, you can access the original R Shiny application.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NeighborhoodPricePlot;