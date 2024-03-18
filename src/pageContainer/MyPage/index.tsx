'use client';

import { Header, MyPageUserInfo, PostCard } from 'components';

import { shareUserTest } from 'data';

import * as S from './index.css';

const MyPage = () => {
  return (
    <div className={S.PageWrapper}>
      <Header />
      <div className={S.ContentWrapper}>
        <MyPageUserInfo />
        <div className={S.PostWrapper}>
          <p className={S.Title}>내 게시물</p>
          <div className={S.PostCardWrapper}>
            {shareUserTest.map((i, d) => {
              return <PostCard data={i} key={d} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
