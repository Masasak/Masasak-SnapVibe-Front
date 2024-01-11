import { style } from '@vanilla-extract/css';

export const PostCardWrap = style({
  width: '26.25rem',
  height: '26.25rem',
  backgroundColor: 'red',
  borderRadius: '0.625rem',
  position: 'relative',
});

export const PostCardImgWrapper = style({
  width: '26.25rem',
  height: '17.5rem',
  backgroundColor: 'yellow',
  borderTopLeftRadius: '0.625rem',
  borderTopRightRadius: '0.625rem',
  position: 'relative',
  overflow: 'hidden',
});

export const Img = style({
  objectFit: 'cover',
});

export const HeartIconWrapper = style({
  cursor: 'pointer',
  position: 'absolute',
  zIndex: '1',
  left: '5%',
  top: '3.8%',
});

export const ProfileImgWrapper = style({
  width: '5.625rem',
  height: '5.625rem',
  borderRadius: '100%',
  border: '0.3125rem solid #222222',
  position: 'absolute',
  top: '52.4%',
  left: '3.8%',
  overflow: 'hidden',
});
