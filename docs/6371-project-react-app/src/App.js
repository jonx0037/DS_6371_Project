import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import AnalysisCentury21Page from './pages/AnalysisCentury21Page';
import AnalysisAllNeighborhoodsPage from './pages/AnalysisAllNeighborhoodsPage';
import DataMethodologyPage from './pages/DataMethodologyPage';
import DownloadsPage from './pages/DownloadsPage';
import KaggleInfoPage from './pages/KaggleInfoPage';
import AboutPage from './pages/AboutPage';

// Define theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c7fb8',
    },
    secondary: {
      main: '#5ab4ac',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/analysis-century21" element={<AnalysisCentury21Page />} />
            <Route path="/analysis-all-neighborhoods" element={<AnalysisAllNeighborhoodsPage />} />
            <Route path="/data-methodology" element={<DataMethodologyPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/kaggle-info" element={<KaggleInfoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;