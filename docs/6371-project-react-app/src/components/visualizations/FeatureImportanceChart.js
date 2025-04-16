import React from 'react';
import { Box } from '@mui/material';
import Plot from 'react-plotly.js';

const FeatureImportanceChart = () => {
  // Sample data for feature importance
  const features = ['GrLivArea', 'OverallQual', 'TotalBsmtSF', 'YearBuilt', 'GarageCars'];
  const importance = [0.35, 0.28, 0.15, 0.12, 0.10];

  return (
    <Box>
      <Plot
        data={[
          {
            y: features,
            x: importance,
            type: 'bar',
            orientation: 'h',
            marker: {
              color: importance.map(value => `rgba(44, 127, 184, ${value * 2.5})`),
            },
          }
        ]}
        layout={{
          title: 'Feature Importance in Price Prediction',
          xaxis: {
            title: 'Relative Importance',
            range: [0, Math.max(...importance) * 1.1],
          },
          yaxis: {
            title: 'Feature',
            automargin: true,
          },
          autosize: true,
          margin: { l: 150, r: 30, t: 50, b: 50 },
          height: 400,
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default FeatureImportanceChart;