import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const UserCardWrapper = style({
  width: '31.4375rem',
  height: '3.125rem',
  backgroundColor: theme.color.purple3,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const UserInfoWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const UserImgWrapper = style({
  width: '3.125rem',
  height: '3.125rem',
  borderRadius: '100%',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  marginRight: '1rem',
});

export const UserId = style({
  ...theme.typo.Body3,
  color: theme.grayScale.white,
  fontWeight: '500',
});

export const CheckIconWrapper = style({
  cursor: 'pointer',
});
