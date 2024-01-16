'use client';

import Image from 'next/image';

import * as S from './index.css';
import * as I from 'assets';

const PostCard = () => {
  return (
    <div className={S.PostCardWrap}>
      <div className={S.HeartIconWrapper}>
        <I.HeartIcon />
      </div>
      <div className={S.PostCardImgWrapper}>
        <Image
          fill
          className={S.Img}
          src="https://i.namu.wiki/i/kZ7tWSGl2Y5JbYfQyyE4b0UU6YYtlQ8ep-snNnPY6pPVXPDQ4nvs2GEr0LQj6WrNlzVEBxA1WHr7pcQV4nMuIQ.webp"
          alt="게시물사진"
        />
      </div>
      <div className={S.ProfileImgWrapper}>
        <Image
          fill
          className={S.Img}
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRGeI6%2Fbtq21db32du%2F84vjG2iZc3H6iuYnUKkb7k%2Fimg.jpg"
          alt="프로필사진"
        />
      </div>
      <div className={S.CardContentWrapper}>
        <div className={S.CardTitleWrapper}>
          <div className={S.ContentWrapper}>
            <p className={S.UserId}>dongwook1207</p>
            <p className={S.FollowTitle}>팔로우</p>
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
