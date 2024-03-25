import Image from 'next/image';

import React from 'react';

import * as S from './index.css';
import * as I from 'assets';
import { PostCardTypes } from 'types';

interface ShareUserCardProps {
  data: PostCardTypes;
  isChecked: boolean;
  onCardClick: () => void;
}

const ShareUserCard: React.FC<ShareUserCardProps> = ({
  data,
  isChecked,
  onCardClick,
}) => (
  <div className={S.UserCardWrapper}>
    <div className={S.UserInfoWrapper}>
      <div className={S.UserImgWrapper}>
        <Image src={data.author.profileImageUrl ?? ''} alt="유저사진" fill />
      </div>
      <div className={S.UserId}>{data.author.nickname}</div>
    </div>
    <div className={S.CheckIconWrapper} onClick={onCardClick}>
      <I.CheckIcon isChecked={isChecked} />
    </div>
  </div>
);

export default ShareUserCard;
