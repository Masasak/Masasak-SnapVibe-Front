import { style } from '@vanilla-extract/css';
import { theme } from './theme.css';

export const FlagIconHoverStyle = style({
  selectors: {
    'svg > &': {
      stroke: theme.grayScale.gray,
    },
    'svg:hover > &': {
      stroke: theme.grayScale.white,
    },
  },
});

export const ShareIconHoverStyle = style({
  selectors: {
    'svg > &': {
      stroke: theme.grayScale.gray,
    },
    'svg:hover > &': {
      stroke: theme.grayScale.white,
    },
  },
});
