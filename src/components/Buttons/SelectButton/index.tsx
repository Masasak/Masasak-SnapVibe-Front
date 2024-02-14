'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as S from './index.css';

interface SelectButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSelect: boolean;
}

const SelectButton: React.FC<SelectButtonProps> = ({
  children = '',
  isSelect,
  ...attributes
}) => (
  <button
    className={S.ButtonStyle}
    {...attributes}
    style={assignInlineVars({
      [S.borderVar]: `${isSelect && '1px solid white'}`,
    })}
  >
    {children}
  </button>
);

export default SelectButton;
