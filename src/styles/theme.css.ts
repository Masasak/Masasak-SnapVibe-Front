import { createThemeContract } from '@vanilla-extract/css';

export const theme = createThemeContract({
  color: {
    purple: '#3C1E7C',
    purple2: '#201F3A',
    textbox: '#2F2E4A',
    background: '#0D0F29',
    blue: '#0055D3',
    blue2: '#0095F6',
  },
  gray: {
    Darkgray: '#222222',
    gray: '#999999',
    gray2: '#777777',
    gray3: '#404040',
    white: '#FFFFFF',
  },
});

export const typo = createThemeContract({
  h1: {
    fontSize: '18px',
    color: 'red',
  },
});
