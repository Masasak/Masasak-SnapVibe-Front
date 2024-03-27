'use client';

import { Header, PostCard } from 'components';

import { MainTitleIcon } from 'assets';

import { shareUserTest } from 'Data';

import * as S from './index.css';
import RandomChatCard from 'components/RandomChatCard';

const MainPage = () => (
  <div className={S.PageWrapper}>
    <Header />
    <div className={S.MainWrapper}>
      <div className={S.MainContainer}>
        <div className={S.TitleContainer}>
          <MainTitleIcon />
        </div>
        <div className={S.PostCardContainer}>
          <RandomChatCard />
          {shareUserTest.map(userInfo => (
            <PostCard data={userInfo} key={userInfo.author.id} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MainPage;
