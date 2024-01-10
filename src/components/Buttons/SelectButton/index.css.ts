import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ButtonStyle = style({
  width: '27.1875rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  backgroundColor: theme.color.purple2,
  color: theme.grayScale.white,
  ...theme.typo.Body2,

  ':hover': {
    border: `0.0625rem solid ${theme.grayScale.white}`,
  },
});
