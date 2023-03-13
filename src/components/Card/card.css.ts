import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../app.css';

export const cardContainer = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  padding: '20px',
  boxSizing: 'border-box',
  gap: '10px',
});

export const cardTitle = style({
  fontSize: '20px',
  fontWeight: '700',
  lineHeight: '24px',
  fontStyle: 'normal',
  color: globalTheme.color.secondary,
});

export const badgeSectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const badgeIconContinaer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #D8D9D9',
  width: '86px',
  height: '86px',
});

export const subTitle = style({
  fontSize: globalTheme.font.size.small,
  fontWeight: '400',
  lineHeight: '22px',
  fontStyle: 'normal',
  color: '#636669',
});

export const featureListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '15px',
});

export const featureItemContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  gap: '10px',
});

export const featureIcon = style({
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  border: '1px solid #D8D9D9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const featureItemTitleSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'left',
});

export const featureItemTitle = style({
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.secondary,
});

export const featureItemSubtitle = style({
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.secondary,
  marginLeft: '5px',
});

export const featureItemDescription = style({
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.secondary,
  textAlign: 'left',
});

export const usageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '10px',
});

export const usageTitle = style({
  fontSize: globalTheme.font.size.small,
  fontWeight: '700',
  lineHeight: '22px',
  color: globalTheme.color.gray2,
});

export const usageCount = style({
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.primary,
});

export const button = style({
  backgroundColor: globalTheme.color.primary,
  color: 'white',
  border: 'none',
  display: 'flex',
  flex: '1',
  width: '280px',
  height: '46px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  transition: 'background-color 200ms ease',
  ':hover': {
    backgroundColor: globalTheme.color.primaryHover,
  },
  ':active': {
    backgroundColor: globalTheme.color.primaryActive,
  },
  ':disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },
});
