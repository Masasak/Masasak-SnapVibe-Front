'use client';

import { useState } from 'react';

import ReportData from 'Data/ReportMenu.json';

import * as I from 'assets';
import * as S from './index.css';
import { PrimaryButton, SelectButton } from 'components';

const ReportModal = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  return (
    <div className={S.ReportModalWrapper}>
      <button className={S.ModalCloseButton}>
        <I.CancelIcon />
      </button>
      {ReportData.map((item, index) => (
        <div key={index}>
          <SelectButton
            onClick={() => {
              setSelectedIndexes(prev =>
                prev.includes(index)
                  ? prev.filter(i => i !== index)
                  : [...prev, index],
              );
            }}
            isSelect={selectedIndexes.includes(index)}
          >
            {item.content}
          </SelectButton>
        </div>
      ))}
      <PrimaryButton>신고하기</PrimaryButton>
    </div>
  );
};

export default ReportModal;
