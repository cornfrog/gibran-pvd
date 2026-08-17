import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC700', // Accent Gold
      light: '#FFD633',
      dark: '#E5B200',
      contrastText: '#0B0B0B',
    },
    secondary: {
      main: '#FDFBF0', // Cream / Off-White Fill
      light: '#FFFFFF',
      dark: '#EDE7CB',
      contrastText: '#0B0B0B',
    },
    background: {
      default: '#0B0B0B',
      paper: '#141414',
    },
    text: {
      primary: '#FDFBF0',
      secondary: 'rgba(253, 251, 240, 0.7)',
      disabled: 'rgba(253, 251, 240, 0.4)',
    },
    divider: 'rgba(253, 251, 240, 0.12)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      lineHeight: 1.05,
      textAlign: 'center',
    },
    h2: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 900,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      lineHeight: 1.15,
      textAlign: 'center',
    },
    h3: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 800,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.04em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0B0B0B',
          color: '#FDFBF0',
          scrollBehavior: 'smooth',
          overflowX: 'hidden',
          width: '100%',
          maxWidth: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 700,
          letterSpacing: '0.02em',
          maxWidth: '100%',
          boxSizing: 'border-box',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #FFC700 0%, #E5B200 100%)',
          color: '#0B0B0B',
          boxShadow: '0 4px 20px rgba(255, 199, 0, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FFD633 0%, #FFC700 100%)',
            boxShadow: '0 6px 28px rgba(255, 199, 0, 0.55)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(255, 199, 0, 0.5)',
          color: '#FFC700',
          '&:hover': {
            borderColor: '#FFC700',
            backgroundColor: 'rgba(255, 199, 0, 0.1)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          flexShrink: 0,
          aspectRatio: '1 / 1',
          boxSizing: 'border-box',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#141414',
          backgroundImage: 'none',
          border: '1px solid rgba(253, 251, 240, 0.12)',
          borderRadius: 16,
          boxSizing: 'border-box',
          maxWidth: '100%',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(253, 251, 240, 0.7)',
          fontSize: '0.9rem',
          '&.Mui-focused': {
            color: '#FFC700',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(253, 251, 240, 0.03)',
          borderRadius: 10,
          color: '#FDFBF0',
          fontSize: '0.95rem',
          maxWidth: '100%',
          boxSizing: 'border-box',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(253, 251, 240, 0.12)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 199, 0, 0.6)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFC700',
            borderWidth: '1.5px',
            boxShadow: '0 0 12px rgba(255, 199, 0, 0.2)',
          },
          '& input': {
            color: '#FDFBF0',
            maxWidth: '100%',
            boxSizing: 'border-box',
            '&::placeholder': {
              color: 'rgba(253, 251, 240, 0.5)',
              opacity: 1,
            },
          },
          '& input[type="date"]': {
            colorScheme: 'dark',
            color: '#FDFBF0',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'rgba(253, 251, 240, 0.7)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#181818',
          border: '1px solid rgba(253, 251, 240, 0.12)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
          borderRadius: 10,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#EDE7CB',
          fontSize: '0.9rem',
          padding: '10px 16px',
          '&:hover': {
            backgroundColor: 'rgba(255, 199, 0, 0.12)',
            color: '#FFC700',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(255, 199, 0, 0.18)',
            color: '#FFC700',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'rgba(255, 199, 0, 0.24)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: 6,
          maxWidth: '100%',
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export default theme;
