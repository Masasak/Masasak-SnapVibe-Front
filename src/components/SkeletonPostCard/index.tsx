'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import * as S from './index.css';

const SkeletonPostCard = () => {
  return (
    <div className={S.PostCardWrapper}>
      <div className={S.ProfileImgContainer} />
      <div className={S.TitleImgContainer} />
      <div className={S.CardContentContainer}>
        <div className={S.ContentWrapper}>
          <div
            className={S.ContentContainer}
            style={assignInlineVars({
              [S.widthVar]: '10.0625rem',
            })}
          />
          <div
            className={S.ContentContainer}
            style={assignInlineVars({
              [S.widthVar]: '4rem',
            })}
          />
        </div>
        <div
          className={S.ContentContainer}
          style={assignInlineVars({
            [S.widthVar]: '16.625rem',
            [S.marginBottomVar]: '0.875rem',
          })}
        />
        <div
          className={S.ContentContainer}
          style={assignInlineVars({
            [S.widthVar]: '3.9375rem',
          })}
        />
      </div>
    </div>
  );
};

export default SkeletonPostCard;
