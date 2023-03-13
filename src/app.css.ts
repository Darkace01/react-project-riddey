import { createGlobalTheme, globalStyle, style } from '@vanilla-extract/css';

export const mainContainer = style({
  backgroundColor: 'gray',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100%',
});

// Define your colors and other styles
export const globalTheme = createGlobalTheme(':root', {
  color: {
    primary: '#E26559',
    secondary: '#3C4043',
  },
  font: {
    size: {
      small: '14px',
      medium: '16px',
      large: '18px',
    },
  },
});
globalStyle('body', {
  padding: 0,
  margin: 0,
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
});

globalStyle('p', {
  marginBlockEnd: 0,
  marginBlockStart: 0,
});

globalStyle('h3', {
  marginBlockEnd: 0,
  marginBlockStart: 0,
});

globalStyle('h2', {
  marginBlockEnd: 0,
  marginBlockStart: 0,
});

globalStyle('h1', {
  marginBlockEnd: 0,
  marginBlockStart: 0,
});
