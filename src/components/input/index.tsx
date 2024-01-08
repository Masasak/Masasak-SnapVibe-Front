'use client';

import * as S from './index.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useRef } from 'react';

interface InputProps {
  inputTitle: string;
  inputWidth?: 'long';
}

const Input: React.FC<InputProps> = ({ inputTitle, inputWidth }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const width = '19.875rem';
  const longWidth = '27.1875rem';

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      className={S.InputWrap}
      style={assignInlineVars({
        [S.widthVar]: inputWidth === 'long' ? longWidth : width,
      })}
      onClick={handleDivClick}
    >
      <p className={S.InputTitle}>{inputTitle}</p>
      <input type="text" className={S.InputContent} ref={inputRef} />
    </div>
  );
};

export default Input;
