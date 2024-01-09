import { globalStyle } from '@vanilla-extract/css';

const fonts = [
  'Pretendard Variable',
  'Pretendard',
  '-apple-system',
  'BlinkMacSystemFont',
  'system-ui',
  'roboto',
  'Helvetica Neue',
  'Segoe UI',
  'Apple SD Gothic Neo',
  'Noto Sans KR',
  'Malgun Gothic',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'sans-serif',
].join('');

globalStyle('body', {
  overscrollBehaviorY: 'none',
  overflowX: 'hidden',
});

globalStyle('body,*', {
  fontFamily: fonts,
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('input', {
  fontFamily: 'Pretendard',
  border: 'none',
  outline: 'none',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  fontFamily: 'Pretendard',
});
