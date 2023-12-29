'use client';

import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

import { GlobalStyle } from '../src/styles';

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
				withThemeFromJSXProvider({
					GlobalStyles: GlobalStyle,
				}),
			],
		},
	},
};

export default preview;
