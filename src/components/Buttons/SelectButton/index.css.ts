import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ButtonStyle = style({
  width: '27.1875rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  backgroundColor: theme.color.purple2,
  color: theme.grayScale.white,
  ...theme.typo.Body2,
  display: 'flex',

  ':hover': {
    border: `0.0625rem solid ${theme.grayScale.white}`,
  },
});

export const ButtonSort = style({
  height: '4.375rem',
  alignItems: 'center',
  paddingLeft: '1.5rem',
  display: 'flex',
});
