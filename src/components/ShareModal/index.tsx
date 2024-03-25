'use client';

import { useState, useRef, useEffect } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { shareUserTest } from 'data';

import * as S from './index.css';
import * as I from 'assets';
import { ShareUserCard } from 'components';
import { useDebounce } from 'hooks';
import { PostCardTypes } from 'types';

const ShareModal = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isSelected, setIsSelected] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSelected.length > 0) {
      inputRef.current?.focus();
    }
  }, [isSelected]);

  const debounceSerachUser = useDebounce(inputValue, 300);

  const isUserSelected = (userId: string) => {
    setIsSelected(prev =>
      prev.includes(userId)
        ? prev.filter(user => user !== userId)
        : [...prev, userId],
    );
    setInputValue('');
  };

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const cancelSelectedUser = (userId: string) => {
    setIsSelected(prev => prev.filter(user => user !== userId));
  };

  const handleUserList = (userList: PostCardTypes[]) =>
    userList.filter(userInfo =>
      debounceSerachUser.length <= 0
        ? true
        : debounceSerachUser
            .split(',')
            .filter(term => term.trim() !== '')
            .some(i => userInfo.author.id.includes(i.trim())),
    );
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
        onClick={handleInputFocus}
      >
        <div className={S.SearchIconWrapper}>
          <I.SearchIcon color={inputValue.length > 0 ? 'white' : 'gray'} />
        </div>
        <div className={S.TagWrapper}>
          {isSelected.length > 0 &&
            isSelected.map(userId => (
              <div className={S.UserTag} key={userId}>
                <div
                  className={S.CancelUserTagButton}
                  onClick={() => cancelSelectedUser(userId)}
                >
                  <I.CancelIcon size="0.75rem" />
                </div>
                {userId}
              </div>
            ))}
          <input
            className={S.SearchInput}
            placeholder={isSelected.length > 0 ? '' : '검색'}
            onChange={e => setInputValue(e.target.value)}
            ref={inputRef}
            value={inputValue}
          />
        </div>
      </div>
      <div className={S.UserCardBox}>
        {handleUserList(shareUserTest).map(userInfo => (
          <ShareUserCard
            data={userInfo}
            key={userInfo.author.id}
            isChecked={isSelected.includes(userInfo.author.nickname)}
            onCardClick={() => isUserSelected(userInfo.author.nickname)}
          />
        ))}
      </div>
      <button className={S.ShareButton}>보내기</button>
    </div>
  );
};

export default ShareModal;
