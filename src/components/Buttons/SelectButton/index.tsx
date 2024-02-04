'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import * as S from './index.css';

const SelectButton: React.FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children = '', ...attributes }) => (
  <button className={S.ButtonStyle} {...attributes}>
    {children}
  </button>
);

export default SelectButton;
