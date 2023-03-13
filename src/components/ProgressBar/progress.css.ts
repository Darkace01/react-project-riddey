import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../app.css';

// Define the styles for the progress bar
export const progressBarStyles = style({
  width: '200px',
  height: '4px',
  backgroundColor: globalTheme.color.secondary,
  overflow: 'hidden',
});

export const progressBarFillStyles = style({
  height: '100%',
  backgroundColor: globalTheme.color.primary,
  transition: 'width 0.5s ease-in-out',
});
