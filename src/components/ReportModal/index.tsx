'use client';

import { useState } from 'react';

import { reportData } from 'data';

import * as I from 'assets';
import * as S from './index.css';
import { PrimaryButton, SelectButton } from 'components';

const ReportModal = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const handleButtonSelected = (idx: number) => {
    setSelectedIndexes(prev => {
      const arr = [...prev];
      const selectedIndex = arr.indexOf(idx);
      if (selectedIndex !== -1) {
        arr.splice(selectedIndex, 1);
      } else {
        arr.push(idx);
      }
      return arr;
    });
  };

  return (
    <div className={S.ReportModalWrapper}>
      <button className={S.ModalCloseButton}>
        <I.CancelIcon />
      </button>
      {reportData.map((item, idx) => (
        <SelectButton
          key={idx}
          onClick={() => handleButtonSelected(idx)}
          isSelect={selectedIndexes.includes(idx)}
        >
          {item.content}
        </SelectButton>
      ))}
      <PrimaryButton>신고하기</PrimaryButton>
    </div>
  );
};

export default ReportModal;
