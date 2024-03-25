'use client';

import Image from 'next/image';

import React, { useRef } from 'react';

import { insertComma } from 'hooks';
import { shareUserTest } from 'data';
import { UserIcon } from 'assets';

import * as S from './index.css';

interface TestProps {
  coverImgUrl?: string;
}

const MyPageUserInfo: React.FC<TestProps> = ({ coverImgUrl }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  // const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className={S.MyPageUserBox}>
      <div className={S.CoverImgWrapper}>
        {coverImgUrl && (
          <Image
            src="https://i.pinimg.com/originals/3d/04/83/3d0483a943e61b82fb4740601bbebd8c.jpg"
            alt="커버 사진"
            sizes="82.5rem 12.5rem"
            fill
            unoptimized
          />
        )}

        <label className={S.ChangeCoverButton} htmlFor="file">
          커버변경
        </label>
        <input
          type="file"
          id="file"
          ref={fileInput}
          // onChange={e => handleCoverImg(e)}
          style={{ display: 'none' }}
        />
      </div>
      <div className={S.UserInfoWrapper}>
        <div className={S.ProfileImgWrapper}>
          {shareUserTest[1].images ? (
            <Image
              src={shareUserTest[0].images}
              alt="프로필 사진"
              sizes="9.375rem 9.375rem"
              fill
              unoptimized
            />
          ) : (
            <UserIcon size="3.125rem" />
          )}
        </div>
        <div className={S.ContentWrap}>
          <p className={S.UserId}>dongwook1230</p>
          <div className={S.ButtonWrapper}>
            <div className={S.FollowshipButtonWrapper}>
              <button className={S.FollowerButton}>
                팔로워 {insertComma(1000)}
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
