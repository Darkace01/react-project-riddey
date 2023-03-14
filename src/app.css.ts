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
      extraSmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.125rem',
      extraLarge: '1.25rem',
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
