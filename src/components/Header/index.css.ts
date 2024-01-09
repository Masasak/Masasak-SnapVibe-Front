import { theme } from 'styles';
import { style } from '@vanilla-extract/css';

export const HeaderWrapper = style({
  width: '100vw',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color.purple,
});

export const HeaderContainer = style({
  width: '82.5rem',
  height: '5rem',
  gap: '32rem',
  display: 'flex',
});

export const LogoContainer = style({
  width: 'fit-content',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
});

export const SearchContainer = style({
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
});
export const SearchWrapper = style({
  gap: '8.0625rem',
  display: 'flex',
});

export const SearchBox = style({
  width: '26.25rem',
  height: '2.75rem',
  backgroundColor: 'white',
  borderRadius: '3.125rem',
  padding: '0 1rem;',
  display: 'flex',
});

export const SearchInput = style({
  width: '22.25rem',
  height: '2.75rem,',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '0.75rem;',
  border: 'none',
  outline: 'none',
  ...theme.typo.Body2,
});

export const IconWrapper = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

export const MenuContainer = style({
  width: 'fit-content',
  height: '5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.75rem',
});
