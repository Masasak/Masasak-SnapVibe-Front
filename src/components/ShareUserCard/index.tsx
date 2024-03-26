import Image from 'next/image';

import React from 'react';

import * as S from './index.css';
import * as I from 'assets';

interface ShareUserCardProps {
  profileImageUrl?: string;
  nickName?: string;
  isChecked: boolean;
  onCardClick: () => void;
}

const ShareUserCard: React.FC<ShareUserCardProps> = ({
  profileImageUrl,
  nickName,
  isChecked,
  onCardClick,
}) => (
  <div className={S.UserCardWrapper}>
    <div className={S.UserInfoWrapper}>
      <div className={S.UserImgWrapper}>
        {profileImageUrl ? (
          <Image src={profileImageUrl} alt="유저사진" fill />
        ) : (
          <I.UserIcon size="1.5rem" />
        )}
      </div>
      <div className={S.UserId}>{nickName}</div>
    </div>
    <div className={S.CheckIconWrapper} onClick={onCardClick}>
      <I.CheckIcon isChecked={isChecked} />
    </div>
  </div>
);

export default ShareUserCard;
