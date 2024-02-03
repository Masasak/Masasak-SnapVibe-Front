import { style, createVar } from '@vanilla-extract/css';
import { theme } from 'styles';

export const paddingVar = createVar();

export const ShareModalWrapper = style({
  width: '35.9375rem',
  height: 'fit-content',
  backgroundColor: theme.color.purple3,
  borderRadius: '1.25rem',
  position: 'relative',
  padding: '2.5rem 2.25rem 3.75rem 2.25rem',
});

export const ModalCloseButton = style({
  cursor: 'pointer',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
});

export const SearchInputWrapper = style({
  width: '31.4375rem',
  height: 'fit-content',
  backgroundColor: theme.color.textbox,
  borderRadius: '3.125rem',
  display: 'flex',
  alignItems: 'center',
  padding: paddingVar,
  marginBottom: '1.875rem',
  cursor: 'text',
});

export const SearchIconWrapper = style({
  marginRight: '0.75rem',
  height: '1rem',
});

export const SearchInput = style({
  ...theme.typo.Body2,
  color: theme.grayScale.white,
  fontWeight: '400',
  background: 'none',
  '::placeholder': {
    ...theme.typo.Body2,
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

export const UserTag = style({
  width: 'fit-content',
  height: '2.1875rem',
  borderRadius: '6.25rem',
  padding: '0.5rem',
  ...theme.typo.Body2,
  backgroundColor: theme.color.purple2,
  color: theme.grayScale.white,
  position: 'relative',
});

export const TagWrapper = style({
  display: 'flex',
  gap: '0.375rem',
  flexWrap: 'wrap',
});

export const CancelUserTagButton = style({
  cursor: 'pointer',
  position: 'absolute',
  right: '0.125rem',
  top: '-0.375rem',
});
