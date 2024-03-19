'use client';

import { Header, MyPageUserInfo, PostCard } from 'components';

import { shareUserTest } from 'data';

import * as S from './index.css';

const MyPage = () => {
  //추후 데이터 받는 로직 작성
  return (
    <div className={S.PageWrapper}>
      <Header />
      <div className={S.ContentWrapper}>
        <MyPageUserInfo />
        <div className={S.PostWrapper}>
          <p className={S.Title}>내 게시물</p>
          <div className={S.PostCardWrapper}>
            {shareUserTest.map(userInfo => {
              return <PostCard data={userInfo} key={userInfo.userId} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
