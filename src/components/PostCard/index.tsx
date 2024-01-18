'use client';

import Image from 'next/image';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useState } from 'react';

import * as S from './index.css';
import * as I from 'assets';
import { theme } from 'styles';

interface PostCardProps {
  isLiked: boolean;
  postImgUrl: string;
  profileImgUrl: string;
  userId: string;
  isFollowed: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  isLiked,
  postImgUrl,
  profileImgUrl,
  userId,
  isFollowed,
}) => {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [followed, setFollwed] = useState<boolean>(isFollowed);
  return (
    <div className={S.PostCardWrap}>
      <div className={S.HeartIconWrapper} onClick={() => setLiked(!liked)}>
        <I.HeartIcon isLiked={liked} />
      </div>
      <div className={S.PostCardImgWrapper}>
        <Image fill className={S.Img} src={postImgUrl ?? ''} alt="게시글사진" />
      </div>
      <div className={S.ProfileImgWrapper}>
        <Image
          fill
          className={S.Img}
          src={profileImgUrl ?? ''}
          alt="프로필사진"
        />
      </div>
      <div className={S.CardContentWrapper}>
        <div className={S.CardTitleWrapper}>
          <div className={S.ContentWrapper}>
            <p className={S.UserId}>{userId}</p>
            <p
              onClick={() => setFollwed(!followed)}
              style={assignInlineVars({
                [S.isFollowedVar]: followed
                  ? theme.grayScale.gray
                  : theme.color.blue2,
              })}
              className={S.FollowTitle}
            >
              {followed ? '팔로잉' : '팔로우'}
            </p>
          </div>
          <div className={S.CardIconWrapper}>
            <div className={S.IconWrapper}>
              <I.ShareIcon />
            </div>
            <div className={S.IconWrapper}>
              <I.FlagIcon />
            </div>
          </div>
        </div>
        <div className={S.CardSubTitleWrapper}>
          <p className={S.HashTagStyle}># newjeans</p>
          <p className={S.SubTitleStyle}>Asap Ditto hipe Boy</p>
          <p className={S.HashTagStyle}># haerin</p>
          <p className={S.SubTitleStyle}>뉴진스 이정우</p>
        </div>
        <p className={S.WriteCommentTitle}>댓글 달기...</p>
      </div>
    </div>
  );
};

export default PostCard;