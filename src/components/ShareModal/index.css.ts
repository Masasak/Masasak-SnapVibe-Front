import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ShareModalWrapper = style({
  width: '35.9375rem',
  height: '42.125rem',
  backgroundColor: theme.color.purple3,
  borderRadius: '1.25rem',
  position: 'relative',
  padding: '2.5rem 2.25rem 3.75rem 2.25rem',
});

export const CancelIconWrapper = style({
  cursor: 'pointer',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
});

export const SearchInputWrapper = style({
  width: '31.4375rem',
  height: '3.125rem',
  backgroundColor: theme.color.textbox,
  borderRadius: '3.125rem',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0 1rem 1.25rem',
  gap: '0.75rem',
  marginBottom: '1.875rem',
});

export const SearchInput = style({
  ...theme.typo.Body2,
  color: theme.grayScale.white,
  flex: '1',
  fontWeight: '400',
  background: 'none',
  '::placeholder': {
    color: theme.grayScale.gray,
  },
});

export const UserCardBox = style({
  width: '31.4375rem',
  height: '30.875rem',
  overflow: 'scroll',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const ShareButton = style({
  width: '31.4375rem',
  height: '3.125rem',
  borderRadius: '0.625rem',
  ...theme.typo.Body2,
  color: theme.grayScale.white,
  backgroundColor: theme.color.purple,
  position: 'absolute',
  bottom: '1.875rem',
});
