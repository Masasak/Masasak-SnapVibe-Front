'use client';

import { useState } from 'react';

import { shareUserTestData } from '../../../public/shareUserTest';

import useDebounce from 'hooks/useDebounce';

import * as S from './index.css';
import * as I from 'assets';
import { ShareUserCard } from 'components';

const ShareModal = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const debounceSerachUser = useDebounce(inputValue, 300);

  return (
    <div className={S.ShareModalWrapper}>
      <div className={S.CancelIconWrapper}>
        <I.CancelIcon />
      </div>
      <div className={S.SearchInputWrapper}>
        <I.SearchIcon color={inputValue.length > 0 ? 'white' : 'gray'} />
        <input
          className={S.SearchInput}
          placeholder="검색"
          onChange={e => setInputValue(e.target.value)}
        />
      </div>
      <div className={S.UserCardBox}>
        {shareUserTestData
          .filter(userid =>
            debounceSerachUser.length <= 0
              ? true
              : debounceSerachUser
                  .split(',')
                  .filter(term => term.trim() !== '')
                  .some(i => userid.userId.includes(i.trim())),
          )
          .map((userInfo, i) => {
            return <ShareUserCard data={userInfo} key={i} />;
          })}
      </div>
      <button className={S.ShareButton}>보내기</button>
    </div>
  );
};

export default ShareModal;
