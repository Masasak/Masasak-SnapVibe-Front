'use client';

import * as S from './index.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface Props {
	inputTitle: string;
	width: 'long' | 'short';
}

const Input = ({ inputTitle, width }: Props) => {
	return (
		<div
			className={S.InputWrap}
			style={assignInlineVars({
				[S.widthVar]: width === 'long' ? '435px' : '318px',
			})}
		>
			<p className={S.InputTitle}>{inputTitle}</p>
			<input type="text" className={S.InputContent} />
		</div>
	);
};

export default Input;
