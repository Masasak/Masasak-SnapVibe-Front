'use client';

import * as S from './index.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useRef } from 'react';

interface Props {
	inputTitle: string;
	width?: 'long';
}

const Input = ({ inputTitle, width }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleDivClick = () => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div
			className={S.InputWrap}
			style={assignInlineVars({
				[S.widthVar]: width === 'long' ? '435px' : '318px',
			})}
			onClick={handleDivClick}
		>
			<p className={S.InputTitle}>{inputTitle}</p>
			<input type="text" className={S.InputContent} ref={inputRef} />
		</div>
	);
};

export default Input;
