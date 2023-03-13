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

export const globalTheme = createGlobalTheme(':root', {
  color: {
    primary: '#E26559',
    secondary: '#3C4043',
    gray2: '#242628',
    gray3: '#EBECEC',
    primaryHover: '#B55147',
    primaryActive: '#883D35',
  },
  font: {
    size: {
      small: '14px',
      medium: '16px',
      large: '18px',
    },
  },
});

['body', 'p', 'h3', 'h2', 'h1'].forEach((selector) =>
  globalStyle(selector, {
    marginBlockEnd: 0,
    marginBlockStart: 0,
  })
);

globalStyle('body', {
  padding: 0,
  margin: 0,
  fontFamily: 'Montserrat, sans-serif',
  textAlign: 'center',
  color: globalTheme.color.secondary,
});
