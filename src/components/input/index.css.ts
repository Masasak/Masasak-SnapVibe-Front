import { style, createVar } from '@vanilla-extract/css';
import { theme, typo } from 'styles';

export const widthVar = createVar();

export const InputWrap = style({
  width: widthVar,
  height: '4.375rem',
  backgroundColor: theme.color.textbox,
  borderRadius: '0.625rem',
  padding: '0.5rem 0rem 1.5625rem 1rem',
  cursor: 'text',
});

export const InputTitle = style({
  ...typo.Body3,
  fontWeight: '400',
  color: theme.grayScale.gray2,
  paddingBottom: '0.1875rem',
});

export const InputContent = style({
  width: '90%',
  height: '1.1875rem',
  ...typo.Body2,
  color: theme.grayScale.white,
  fontStyle: 'normal',
  fontWeight: '400',
  background: 'none',
  border: 'none',
  outline: 'none',
});
