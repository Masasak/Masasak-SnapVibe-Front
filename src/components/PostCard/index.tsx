'use client';

import Image from 'next/image';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { useState } from 'react';

import { PostCardTypes } from 'types';

import * as S from './index.css';
import * as I from 'assets';

import { theme } from 'styles';

interface PostCardProps {
  data: PostCardTypes;
}

const PostCard: React.FC<PostCardProps> = ({
  data: { isLiked, isFollowed, postImgUrl, profileImgUrl, userId },
}) => {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const [followed, setFollwed] = useState<boolean>(isFollowed);
  return (
    <div className={S.PostCardWrap}>
      <div
        className={S.HeartIconWrapper}
        onClick={() => setLiked(prevState => !prevState)}
      >
        <I.HeartIcon isLiked={liked} />
      </div>
      <div className={S.PostCardImgWrapper}>
        {postImgUrl ? (
          <Image
            className={S.Img}
            src={postImgUrl}
            alt="게시글사진"
            sizes="26.25rem 17.5rem"
            fill
            unoptimized
          />
        ) : (
          'default image'
        )}
      </div>
      <div className={S.ProfileImgWrapper}>
        {profileImgUrl ? (
          <Image
            className={S.Img}
            src={profileImgUrl}
            alt="프로필사진"
            sizes="5.625rem 5.625rem"
            fill
            unoptimized
          />
        ) : (
          <I.UserIcon size="1.875rem" />
        )}
      </div>
      <div className={S.CardContentWrapper}>
        <div className={S.CardTitleWrapper}>
          <div className={S.ContentWrapper}>
            <p className={S.UserId}>{userId}</p>
            <p
              onClick={() => setFollwed(prevState => !prevState)}
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
          <span className={S.HashTagStyle}># newjeans</span>
          <span className={S.SubTitleStyle}>Asap Ditto hipe Boy</span>
          <span className={S.HashTagStyle}># haerin</span>
          <span className={S.SubTitleStyle}>뉴진스 이정우</span>
        </div>
        <p className={S.WriteCommentTitle}>댓글 달기...</p>
      </div>
    </div>
  );
};

export default PostCard;
