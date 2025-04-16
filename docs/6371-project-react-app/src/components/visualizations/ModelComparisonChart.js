import React from 'react';
import { Box } from '@mui/material';
import Plot from 'react-plotly.js';

const ModelComparisonChart = () => {
  // Sample data for model comparison
  const models = ['Model 1 (All Features)', 'Model 2 (Century 21)', 'Model 3 (Selected Features)'];
  const rmse = [0.152, 0.143, 0.137];
  const r2 = [0.85, 0.87, 0.89];

  return (
    <Box>
      <Plot
        data={[
          {
            x: models,
            y: rmse,
            type: 'bar',
            name: 'RMSE',
            marker: { color: '#2c7fb8' }
          },
          {
            x: models,
            y: r2,
            type: 'bar',
            name: 'R² Score',
            yaxis: 'y2',
            marker: { color: '#5ab4ac' }
          }
        ]}
        layout={{
          title: 'Model Performance Comparison',
          autosize: true,
          yaxis: {
            title: 'RMSE (lower is better)',
            titlefont: { color: '#2c7fb8' },
            tickfont: { color: '#2c7fb8' }
          },
          yaxis2: {
            title: 'R² Score (higher is better)',
            titlefont: { color: '#5ab4ac' },
            tickfont: { color: '#5ab4ac' },
            overlaying: 'y',
            side: 'right',
            range: [0, 1]
          },
          margin: { l: 50, r: 50, t: 50, b: 100 },
          height: 500,
          barmode: 'group'
        }}
        useResizeHandler={true}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default ModelComparisonChart;