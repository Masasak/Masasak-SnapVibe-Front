import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const ReportModalWrapper = style({
  width: '35.9375rem',
  height: '31.25rem',
  backgroundColor: theme.color.purple3,
  borderRadius: '1.25rem',
  position: 'relative',
  padding: '2.1875rem 4.375rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
});
