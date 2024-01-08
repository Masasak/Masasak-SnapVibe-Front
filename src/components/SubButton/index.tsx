'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './index.css';

const SubButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children = '', ...atributes }) => {
  return (
    <button className={S.ButtonStyle} {...atributes}>
      {children}
    </button>
  );
};

export default SubButton;
