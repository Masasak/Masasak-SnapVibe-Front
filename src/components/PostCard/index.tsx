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
          alt=""
        />
      </div>
      <div className={S.ProfileImgWrapper}>
        <Image
          fill
          className={S.Img}
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRGeI6%2Fbtq21db32du%2F84vjG2iZc3H6iuYnUKkb7k%2Fimg.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default PostCard;
