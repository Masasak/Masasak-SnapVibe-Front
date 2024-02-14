'use client';

import { useState } from 'react';

import { reportData } from 'Data';

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
      {reportData.map((item, index) => (
        <SelectButton
          key={index}
          onClick={() => {
            setSelectedIndexes(prev => {
              const arr = [...prev];
              if (arr.indexOf(index) !== -1) {
                arr.splice(arr.indexOf(index), 1);
              } else {
                arr.push(index);
              }
              return arr;
            });
          }}
          isSelect={selectedIndexes.indexOf(index) !== -1}
        >
          {item.content}
        </SelectButton>
      ))}
      <PrimaryButton>신고하기</PrimaryButton>
    </div>
  );
};

export default ReportModal;
