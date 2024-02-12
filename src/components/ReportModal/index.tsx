// ReportModal.tsx
'use client';

import * as I from 'assets';
import { PrimaryButton, SelectButton } from 'components';
import { useState } from 'react';
import * as S from './index.css';
import ReportData from 'Data/ReportMenu.json';

const ReportModal = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  return (
    <div className={S.ReportModalWrapper}>
      <div className={S.ModalCloseButton}>
        <I.CancelIcon />
      </div>
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
