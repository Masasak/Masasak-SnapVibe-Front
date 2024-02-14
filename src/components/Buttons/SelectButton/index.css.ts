import { createVar, style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const borderVar = createVar();

export const ButtonStyle = style({
  width: '27.1875rem',
  height: '4.375rem',
  borderRadius: '0.625rem',
  backgroundColor: theme.color.textbox,
  border: borderVar,
  color: theme.grayScale.white,
  ...theme.typo.Body2,
  display: 'flex',
  alignItems: 'center',
  padding: '0 1.5rem',

  ':hover': {
    border: `0.0625rem solid ${theme.grayScale.white}`,
    padding: '0 1.4375rem',
  },
});
