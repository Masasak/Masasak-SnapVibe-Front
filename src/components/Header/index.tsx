'use client';

import Image from 'next/image';

import * as S from './index.css';
import { ChatIcon, NoticeIcon, SearchIcon, UserIcon } from 'assets';
import LogoIcon from 'assets/png/LogoIcon.png';

const Header = () => (
  <div className={S.HeaderWrapper}>
    <div className={S.HeaderContainer}>
      <div className={S.SearchWrapper}>
        <div className={S.LogoContainer}>
          <div className={S.IconWrapper}>
            <Image src={LogoIcon} alt="Logo Icon" width={119} height={28} />
          </div>
        </div>
        <div className={S.SearchContainer}>
          <div className={S.SearchBox}>
            <div className={S.IconWrapper}>
              <SearchIcon color="gray" />
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

export default Header;
