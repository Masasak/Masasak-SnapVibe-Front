import { style, createVar } from '@vanilla-extract/css';
import { theme } from 'styles';

export const isFollowedVar = createVar();

export const PostCardWrap = style({
  width: '26.25rem',
  height: '26.25rem',
  backgroundColor: '#222222',
  borderRadius: '0.625rem',
  position: 'relative',
});

export const PostCardImgWrapper = style({
  width: '26.25rem',
  height: '17.5rem',
  borderTopLeftRadius: '0.625rem',
  borderTopRightRadius: '0.625rem',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const Img = style({
  objectFit: 'cover',
});

export const HeartIconWrapper = style({
  cursor: 'pointer',
  position: 'absolute',
  zIndex: '1',
  left: '1.3125rem',
  top: '1rem',
});

export const IconWrapper = style({
  cursor: 'pointer',
});

export const ProfileImgWrapper = style({
  width: '5.625rem',
  height: '5.625rem',
  borderRadius: '100%',
  border: '0.3125rem solid #222222',
  position: 'absolute',
  top: '13.75rem',
  left: '1rem',
  overflow: 'hidden',
  cursor: 'pointer',
});

export const CardContentWrapper = style({
  width: '23.25rem',
  margin: '0 auto',
});

export const CardTitleWrapper = style({
  width: '100%',
  height: '1.5rem',
  marginTop: '2.0625rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const ContentWrapper = style({
  display: 'flex',
});

export const CardIconWrapper = style({
  width: '4rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const UserId = style({
  ...theme.typo.Body2,
  fontWeight: '500',
  color: theme.grayScale.white,
  marginRight: '0.75rem',
  cursor: 'pointer',
});

export const FollowTitle = style({
  ...theme.typo.Body3,
  fontWeight: '500',
  color: isFollowedVar,
  paddingTop: '1px',
  cursor: 'pointer',
});

export const CardSubTitleWrapper = style({
  marginTop: '0.25rem',
  width: '86.6%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: theme.grayScale.white,
});

export const HashTagStyle = style({
  ...theme.typo.Body3,
  color: theme.color.blue2,
  fontWeight: '500',
  cursor: 'pointer',
  marginRight: '0.5rem',
});

export const SubTitleStyle = style({
  ...theme.typo.Body3,
  color: theme.grayScale.white,
  fontWeight: '500',
  marginRight: '0.5rem',
});

export const WriteCommentTitle = style({
  ...theme.typo.Body3,
  color: theme.grayScale.gray2,
  fontWeight: '500',
  marginTop: '0.9375rem',
  cursor: 'pointer',
});
