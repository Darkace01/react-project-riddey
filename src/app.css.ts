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
    lightGray: '#8A8C8E',
    primaryHover: '#B55147',
    primaryActive: '#883D35',
    white: '#FFFFFF',
  },
  font: {
    size: {
      small: '14px',
      medium: '16px',
      large: '18px',
    },
    weight: {
      normal: '400',
      medium: '700',
    },
    family: 'Montserrat, sans-serif',
  },
});

globalStyle('body', {
  padding: 0,
  margin: 0,
  fontFamily: globalTheme.font.family,
  textAlign: 'center',
  color: globalTheme.color.secondary,
});

globalStyle('*', {
  marginBlockEnd: 0,
  marginBlockStart: 0,
});

globalStyle('h1, h2, h3', {
  fontWeight: globalTheme.font.weight.medium,
});
