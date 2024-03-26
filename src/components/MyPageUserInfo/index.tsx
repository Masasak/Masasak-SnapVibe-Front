'use client';

import Image from 'next/image';

import React, { useRef } from 'react';

import { insertComma } from 'hooks';
import { myPageTypes } from 'types';
import { UserIcon } from 'assets';

import * as S from './index.css';

interface MyPageUserInfoProps {
  data: myPageTypes;
}

const MyPageUserInfo: React.FC<MyPageUserInfoProps> = ({ data }) => {
  const fileInput = useRef<HTMLInputElement>(null);

  // const handleCoverImg = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className={S.MyPageUserBox}>
      <div className={S.CoverImgWrapper}>
        {data.user.profileCoverImage && (
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
          {data.user.profileImageUrl ? (
            <Image
              src={data.user.profileImageUrl}
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
          <p className={S.UserId}>{data.user.nickName}</p>
          <div className={S.ButtonWrapper}>
            <div className={S.FollowshipButtonWrapper}>
              <button className={S.FollowerButton}>
                팔로워 {insertComma(data.user.followers)}
              </button>
              <button className={S.FollowingButton}>
                팔로잉 {insertComma(data.user.followings)}
              </button>
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
