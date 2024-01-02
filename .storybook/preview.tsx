'use client';

import type { Preview } from '@storybook/react';
import '../src/styles/GlobalStyle.css';

import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#ffffff',
          },
          {
            name: 'dark',
            value: '#050505',
          },
        ],
      },
      decorators: [
        Story => (
          <>
            <Story />
          </>
        ),
      ],
    },
  },
};

export default preview;
