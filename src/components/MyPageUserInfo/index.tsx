'use client';

import Image from 'next/image';

import React, { useRef } from 'react';

import * as S from './index.css';
import { useInsertComma } from 'hooks';

const MyPageUserInfo = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className={S.MyPageUserBox}>
      <div className={S.CoverImgWrapper}>
        <Image
          src="https://i.pinimg.com/originals/3d/04/83/3d0483a943e61b82fb4740601bbebd8c.jpg"
          alt="커버 사진"
          fill
          unoptimized
        />
        <label className={S.ChangeCoverButton} htmlFor="file">
          커버변경
        </label>
        <input
          type="file"
          id="file"
          ref={fileInput}
          onChange={e => handleCoverImg(e)}
          style={{ display: 'none' }}
        />
      </div>
      <div className={S.UserInfoWrapper}>
        <div className={S.ProfileImgWrapper}>
          <Image src="/마리오.jpeg" alt="프로필 사진" fill />
        </div>
        <div className={S.ContentWrap}>
          <p className={S.UserId}>dongwook1230</p>
          <div className={S.ButtonWrapper}>
            <div className={S.FollowshipButtonWrapper}>
              <button className={S.FollowerButton}>
                팔로워 {useInsertComma(1000)}
              </button>
              <button className={S.FollowingButton}>팔로잉 100</button>
            </div>
            <div>
              <button className={S.HandleInfoButton}>정보 수정</button>
              <span className={S.HandleInfoButton}>
                &nbsp;&nbsp;|&nbsp;&nbsp;
              </span>
              <button className={S.HandleInfoButton}>로그아웃</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageUserInfo;
