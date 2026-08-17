import { BrowserRouter } from 'react-router';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoundProfile from './components/SoundProfile';
import MixesSection from './components/MixesSection';
import ResidenciesSection from './components/ResidenciesSection';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0B0B0B',
            position: 'relative',
          }}
        >
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1, width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
            <Hero />
            <SoundProfile />
            <MixesSection />
            <ResidenciesSection />
            <BookingSection />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
