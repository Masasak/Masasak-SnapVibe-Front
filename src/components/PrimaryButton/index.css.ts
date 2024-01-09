import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ButtonStyle = style({
  ...theme.typo.h4,
  fontWeight: '500',
  color: theme.grayScale.white,
  width: '27.1875rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  backgroundColor: theme.color.purple,
});
