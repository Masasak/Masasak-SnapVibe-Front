'use client';

import { SubButton, Input } from 'components';

import * as S from './index.css';

interface Props {
  buttonContent: string;
  inputTitle: string;
}

const InputForm: React.FC<Props> = ({ buttonContent, inputTitle }) => {
  return (
    <div className={S.ContentWrap}>
      <Input inputTitle={inputTitle} />
      <SubButton>{buttonContent}</SubButton>
    </div>
  );
};

export default InputForm;
