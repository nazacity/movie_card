import { createTheme } from '@mui/material/styles';
import colors from './colors';
import shadows from './shadows';
import typography from './typography';
import _ from 'lodash';

const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '*::-webkit-scrollbar-track': {
        WebkitBoxShadow: 'inset 0 0 1px rgba(0,0,0,0.1)',
      },

      '*': {
        boxSizing: 'border-box',
      },
      html: {
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
      },
      "*[dir='rtl'] .buyNowImg": {
        transform: 'scaleX(-1)',
      },

      '.buyNowImg': {
        position: 'absolute',
        right: '-44px',
        top: '-18px',
        width: '143px',
        height: '175px',
      },
      '.MuiCardHeader-action': {
        alignSelf: 'center !important',
      },
      '.scrollbar-container': {
        borderRight: '0 !important',
      },
      "*[dir='rtl'] .welcomebg:before": {
        backgroundPosition: 'top -24px left -9px !important',
      },
      a: {
        textDecoration: 'none',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: '15px !important',
        paddingRight: '15px !important',
        maxWidth: '1600px',
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: '9px',
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
        padding: '14px',
        margin: '15px',
        boxShadow: '0px 7px 30px 0px rgba(90, 114, 123, 0.11)',
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: '40px',
      },
    },
  },

  MuiGridItem: {
    styleOverrides: {
      root: {
        paddingTop: '30px',
        paddingLeft: '30px !important',
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        backgroundColor: '#ecf0f2',
        borderRadius: '6px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '0',
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: '500',
        fontSize: '0.75rem',
      },
    },
  },
};

export const SIZES = {
  SidebarWidth: 265,
  TopbarHeight: 70,
};

export const baseTheme = {
  direction: 'ltr',
  palette: colors,
  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: SIZES.TopbarHeight,
        padding: '0 30px',
      },
      '@media(max-width:1280px)': {
        minHeight: '64px',
      },
    },
  },
  status: {
    danger: '#e53e3e',
  },
  components,
  typography,
  shadows,
};

// Create a theme instance.
export const THEME = createTheme(_.merge(baseTheme));
