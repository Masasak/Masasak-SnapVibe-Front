'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './index.css';

const PrimaryButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children = '', ...attributes }) => {
  return (
    <button className={S.ButtonStyle} {...attributes}>
      {children}
    </button>
  );
};

export default PrimaryButton;
