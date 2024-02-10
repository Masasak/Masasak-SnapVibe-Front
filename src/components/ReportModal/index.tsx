// ReportModal.tsx
'use client';

import React, { useState } from 'react';
import { SelectButton, PrimaryButton } from 'components';
import { ReportData } from 'Data/ReportMenu';
import * as S from './index.css';

const ReportModal = () => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  return (
    <div className={S.ReportModalWrapper}>
      {ReportData.map((item, index) => (
        <div key={index}>
          <SelectButton
            key={index}
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