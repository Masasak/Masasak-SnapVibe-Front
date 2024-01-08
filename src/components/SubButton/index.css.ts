import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ButtonStyle = style({
  ...theme.typo.Body2,
  fontWeight: '500',
  color: theme.grayScale.white,
  width: '6.625rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  border: 'none',
  background: theme.color.textbox,
});
