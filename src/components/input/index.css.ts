import { style, createVar } from '@vanilla-extract/css';

export const widthVar = createVar();

export const InputWrap = style({
	width: widthVar,
	height: '4.375rem',
	backgroundColor: '#2F2E4A',
	borderRadius: '0.625rem',
	padding: '0.5rem 0rem 1.5625rem 1rem',
	boxSizing: 'border-box',
	cursor: 'text',
});

export const InputTitle = style({
	fontSize: '0.875rem',
	fontStyle: 'normal',
	fontWeight: '400',
	color: '#777777',
	paddingBottom: '0.1875rem',
	margin: '0',
});

export const InputContent = style({
	width: '90%',
	height: '1.1875rem',
	fontFamily: 'Pretendard',
	fontSize: '1rem',
	fontStyle: 'normal',
	fontWeight: '400',
	background: 'none',
	color: '#ffffff',
	border: 'none',
	outline: 'none',
	padding: '0',
});
