'use client';

import { useState, useRef } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

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

  console.log(isSelected);

  const isUserSelected = (userId: string) => {
    setIsSelected(prev => {
      const prevSelectedUser = prev.includes(userId);

      return prevSelectedUser
        ? prev.filter(user => user !== userId)
        : [...prev, userId];
    });
    setInputValue('');
  };

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCancelSelectedUser = (userId: string) => {
    setIsSelected(prev => {
      return prev.filter(user => user !== userId);
    });
  };

  return (
    <div className={S.ShareModalWrapper}>
      <div className={S.ModalCloseButton}>
        <I.CancelIcon />
      </div>
      <div
        className={S.SearchInputWrapper}
        style={assignInlineVars({
          [S.paddingVar]:
            isSelected.length > 0
              ? '0.4375rem 0 0.5rem 1.25rem'
              : '0.9375rem 0 1rem 1.25rem',
        })}
        onClick={handleDivClick}
      >
        <div className={S.SearchIconWrapper}>
          <I.SearchIcon color={inputValue.length > 0 ? 'white' : 'gray'} />
        </div>
        <div className={S.TagWrapper}>
          {isSelected.length > 0
            ? isSelected.map(userId => {
                return (
                  <div className={S.UserTag} key={userId}>
                    <div
                      className={S.CancelUserTagButton}
                      onClick={() => handleCancelSelectedUser(userId)}
                    >
                      <I.CancelIcon size="0.75rem" />
                    </div>
                    {userId}
                  </div>
                );
              })
            : ''}
          <input
            className={S.SearchInput}
            placeholder="검색"
            onChange={e => setInputValue(e.target.value)}
            ref={inputRef}
            value={inputValue}
          />
        </div>
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
