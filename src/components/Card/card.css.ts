import { style } from '@vanilla-extract/css';
import { globalTheme } from '../../app.css';

export const cardContainer = style({
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '18.75rem',
  padding: '20px',
  boxSizing: 'border-box',
  gap: '10px',
});

export const cardTitle = style({
  fontSize: globalTheme.font.size.extraLarge,
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
  width: '5.375rem',
  height: '5.375rem',
});

export const subTitle = style({
  fontSize: globalTheme.font.size.small,
  fontWeight: globalTheme.font.weight.normal,
  lineHeight: '22px',
  fontStyle: 'normal',
  color: globalTheme.color.lightGray,
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
  width: '1.375rem',
  height: '1.375rem',
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
  fontSize: globalTheme.font.size.extraSmall,
  fontWeight: globalTheme.font.weight.medium,
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.secondary,
});

export const featureItemSubtitle = style({
  fontSize: globalTheme.font.size.extraSmall,
  fontWeight: globalTheme.font.weight.normal,
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.lightGray,
  marginLeft: '5px',
});

export const featureItemDescription = style({
  fontSize: globalTheme.font.size.extraSmall,
  fontWeight: globalTheme.font.weight.normal,
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.lightGray,
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
  fontWeight: globalTheme.font.weight.medium,
  lineHeight: '22px',
  color: globalTheme.color.gray2,
});

export const usageCount = style({
  fontSize: globalTheme.font.size.extraSmall,
  fontWeight: globalTheme.font.weight.medium,
  lineHeight: globalTheme.font.size.medium,
  color: globalTheme.color.primary,
  fontFamily: globalTheme.font.family,
});

export const button = style({
  backgroundColor: globalTheme.color.primary,
  color: 'white',
  border: 'none',
  display: 'flex',
  flex: '1',
  width: '17.5rem',
  height: '46px',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontWeight: globalTheme.font.weight.medium,
  fontSize: globalTheme.font.size.small,
  fontFamily: globalTheme.font.family,

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
