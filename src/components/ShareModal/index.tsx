'use client';

import { useState, useRef } from 'react';

import { shareUserTestData } from '../../../public/shareUserTest';

import useDebounce from 'hooks/useDebounce';

import * as S from './index.css';
import * as I from 'assets';
import { ShareUserCard } from 'components';

const ShareModal = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSelected, setIsSelected] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const debounceSerachUser = useDebounce(inputValue, 300);

  const isUserSelected = (userId: string) => {
    setIsSelected(prev => {
      const prevSelectedUser = prev.includes(userId);

      return prevSelectedUser
        ? prev.filter(user => user !== userId)
        : [...prev, userId];
    });
  };

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={S.ShareModalWrapper}>
      <div className={S.CancelIconWrapper}>
        <I.CancelIcon />
      </div>
      <div className={S.SearchInputWrapper} onClick={handleDivClick}>
        <I.SearchIcon color={inputValue.length > 0 ? 'white' : 'gray'} />
        <input
          className={S.SearchInput}
          placeholder="검색"
          onChange={e => setInputValue(e.target.value)}
          ref={inputRef}
        />
      </div>
      <div className={S.UserCardBox}>
        {shareUserTestData
          .filter(userInfo =>
            debounceSerachUser.length <= 0
              ? true
              : debounceSerachUser
                  .split(',')
                  .filter(term => term.trim() !== '')
                  .some(i => userInfo.userId.includes(i.trim())),
          )
          .map((userInfo, i) => {
            return (
              <ShareUserCard
                data={userInfo}
                key={i}
                isChecked={isSelected.includes(userInfo.userId)}
                onCardClick={() => isUserSelected(userInfo.userId)}
              />
            );
          })}
      </div>
      <button className={S.ShareButton}>보내기</button>
    </div>
  );
};

export default ShareModal;
