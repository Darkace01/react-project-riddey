import { style } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: '#fff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  padding: '24px',
  maxWidth: '400px',
  margin: '0 auto',
  color: '#000',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '16px',
  color: '#57e348',
});

export const description = style({
  fontSize: '16px',
  lineHeight: '24px',
});
