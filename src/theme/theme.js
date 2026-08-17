import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F59E0B', // Amber / Gold
      light: '#FCD34D',
      dark: '#D97706',
      contrastText: '#070709',
    },
    secondary: {
      main: '#06B6D4', // Electric Cyan
      light: '#67E8F9',
      dark: '#0891B2',
      contrastText: '#070709',
    },
    background: {
      default: '#070709',
      paper: '#111116',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
      disabled: '#475569',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
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
          backgroundColor: '#070709',
          color: '#F8FAFC',
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
          background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
          color: '#070709',
          boxShadow: '0 4px 20px rgba(245, 158, 11, 0.35)',
          '&:hover': {
            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
            boxShadow: '0 6px 28px rgba(245, 158, 11, 0.55)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderColor: 'rgba(245, 158, 11, 0.5)',
          color: '#F59E0B',
          '&:hover': {
            borderColor: '#F59E0B',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
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
          backgroundColor: '#111116',
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 16,
          boxSizing: 'border-box',
          maxWidth: '100%',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#94A3B8',
          fontSize: '0.9rem',
          '&.Mui-focused': {
            color: '#F59E0B',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: 10,
          color: '#F8FAFC',
          fontSize: '0.95rem',
          maxWidth: '100%',
          boxSizing: 'border-box',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.12)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(245, 158, 11, 0.6)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#F59E0B',
            borderWidth: '1.5px',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.2)',
          },
          '& input': {
            color: '#F8FAFC',
            maxWidth: '100%',
            boxSizing: 'border-box',
            '&::placeholder': {
              color: '#64748B',
              opacity: 1,
            },
          },
          '& input[type="date"]': {
            colorScheme: 'dark',
            color: '#F8FAFC',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: '#94A3B8',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#16161D',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
          borderRadius: 10,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#E2E8F0',
          fontSize: '0.9rem',
          padding: '10px 16px',
          '&:hover': {
            backgroundColor: 'rgba(245, 158, 11, 0.12)',
            color: '#F59E0B',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(245, 158, 11, 0.18)',
            color: '#F59E0B',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: 'rgba(245, 158, 11, 0.24)',
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
