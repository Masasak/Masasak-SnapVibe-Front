'use client';

import { Global, css } from '@emotion/react';

import emotionReset from 'emotion-reset';

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body {
          overscroll-behavior-y: none;
          overflow-x: hidden;
        }

        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable-dynamic-subset.css');
        @import url('https://use.typekit.net/cei0oyt.css');

        body,
        * {
          font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        input {
          font-family: 'Pretendard';
        }
      `}
    />
  );
}
