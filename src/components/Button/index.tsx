'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './index.css';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = ({ children = '', ...attributes }) => {
  return (
    <button className={S.ButtonStyle} {...attributes}>
      {children}
    </button>
  );
};

export default Button;
