import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const RandomCardWrapper = style({
  width: '26.25rem',
  height: '26.25rem',
  backgroundColor: theme.color.purple2,
  borderRadius: '0.625rem',
});

export const RandomCardContainer = style({
  padding: '2.75rem 3.75rem 1.75rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '3.9375rem',
});

export const RandomButton = style({
  width: '18.75rem',
  height: '3.4375rem',
  borderRadius: '0.3125rem',
  ...theme.typo.h4,
  color: theme.grayScale.white,
  backgroundColor: theme.color.purple5,
  fontWeight: '500',

  ':hover': {
    backgroundColor: theme.color.purple4,
  },
});
