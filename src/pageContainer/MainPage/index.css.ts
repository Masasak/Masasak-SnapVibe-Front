import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const PageWrapper = style({
  backgroundColor: theme.color.background,
  width: '100vw',
  minHeight: '100vh',
});

export const MainWrapper = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const MainContainer = style({
  width: '81.875rem',
});

export const TitleContainer = style({
  width: '100%',
  padding: '3.75rem 0 2.5rem 0',
});

export const PostCardContainer = style({
  width: '100%',
  height: 'auto',
  gap: '1.875rem',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
});
