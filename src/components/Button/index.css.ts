import { style } from '@vanilla-extract/css';
import { theme, typo } from 'styles';

export const ButtonStyle = style({
  ...typo.h4,
  fontWeight: '500',
  color: theme.grayScale.white,
  width: '27.1875rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  backgroundColor: theme.color.purple,
  border: 'none',
});
