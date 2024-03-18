import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const PageWrapper = style({
  backgroundColor: theme.color.background,
  width: '100%',
  minHeight: '100vh',
});

export const ContentWrapper = style({
  width: '82.5rem',
  margin: '3.75rem 18.75rem 6.9375rem 18.75rem',
});

export const PostWrapper = style({
  marginTop: '4.375rem',
});

export const Title = style({
  ...theme.typo.h2,
  fontWeight: '600',
  color: theme.grayScale.white,
  marginBottom: '1.5rem',
});

export const PostCardWrapper = style({
  width: '82.5rem',
  height: '26.25rem',
  display: 'flex',
  gap: '1.875rem',
  overflow: 'scroll',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});
