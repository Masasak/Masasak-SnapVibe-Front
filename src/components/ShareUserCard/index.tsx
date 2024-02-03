import Image from 'next/image';

import React from 'react';

import * as S from './index.css';
import * as I from 'assets';

interface ShareUserCardProps {
  data: {
    profileImgUrl: string;
    userId: string;
  };
  isChecked: boolean;
  onCardClick: () => void;
}

const ShareUserCard: React.FC<ShareUserCardProps> = ({
  data: { profileImgUrl, userId },
  isChecked,
  onCardClick,
}) => {
  return (
    <div className={S.UserCardWrapper}>
      <div className={S.UserInfoWrapper}>
        <div className={S.UserImgWrapper}>
          <Image src={profileImgUrl} alt="유저사진" fill />
        </div>
        <div className={S.UserId}>{userId}</div>
      </div>
      <div className={S.CheckIconWrapper} onClick={onCardClick}>
        <I.CheckIcon isChecked={isChecked} />
      </div>
    </div>
  );
};

export default ShareUserCard;
