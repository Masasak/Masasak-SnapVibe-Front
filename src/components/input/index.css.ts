import { style, createVar } from '@vanilla-extract/css';

export const widthVar = createVar();

export const InputWrap = style({
	width: widthVar,
	height: '70px',
	backgroundColor: '#2F2E4A',
	borderRadius: '10px',
	padding: '8px 0px 25px 16px',
	boxSizing: 'border-box',
});

export const InputTitle = style({
	fontSize: '14px',
	fontStyle: 'normal',
	fontWeight: '400',
	color: '#777777',
	paddingBottom: '3px',
	margin: '0',
});

export const InputContent = style({
	width: '90%',
	height: '19px',
	fontFamily: 'Pretendard',
	fontSize: '16px',
	fontStyle: 'normal',
	fontWeight: '400',
	background: 'none',
	color: '#ffffff',
	border: 'none',
	outline: 'none',
	padding: '0',
});
