import { createGlobalTheme } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
  color: {
    purple: '#3C1E7C',
    purple2: '#201F3A',
    textbox: '#2F2E4A',
    background: '#0D0F29',
    blue: '#0055D3',
    blue2: '#0095F6',
  },
  grayScale: {
    Darkgray: '#222222',
    gray: '#999999',
    gray2: '#777777',
    gray3: '#404040',
    white: '#FFFFFF',
  },
});

export const typo = createGlobalTheme(':root', {
  h1: {
    fontSize: '1.75rem',
    lineHeight: '2.0625rem',
  },
  h2: {
    fontSize: '1.5rem',
    lineHeight: '1.8125rem',
  },
  h3: {
    fontSize: '1.375rem',
    lineHeight: '1.625rem',
  },
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
  },
  Body1: {
    fontSize: '1.125rem',
    lineHeight: '1.3125rem',
  },
  Body2: {
    fontSize: '1rem',
    lineHeight: '1.1875rem',
  },
  Body3: {
    fontSize: '0.875rem',
    lineHeight: '1.0625rem',
  },
});
