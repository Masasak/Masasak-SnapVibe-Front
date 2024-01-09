'use client';

import * as S from './index.css';
import { ChatIcon, LogoIcon, NoticeIcon, SearchIcon, UserIcon } from 'assets';

const Header = () => {
  return (
    <div className={S.HeaderWrapper}>
      <div className={S.HeaderContainer}>
        <div className={S.SearchWrapper}>
          <div className={S.LogoContainer}>
            <div className={S.IconWrapper}>
              <LogoIcon />
            </div>
          </div>
          <div className={S.SearchContainer}>
            <div className={S.SearchBox}>
              <div className={S.IconWrapper}>
                <SearchIcon />
              </div>
              <input className={S.SearchInput} placeholder="검색" />
            </div>
          </div>
        </div>
        <div className={S.MenuContainer}>
          <div className={S.IconWrapper}>
            <UserIcon />
          </div>
          <div className={S.IconWrapper}>
            <ChatIcon />
          </div>
          <div className={S.IconWrapper}>
            <NoticeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
