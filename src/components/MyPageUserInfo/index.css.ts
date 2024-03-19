import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const MyPageUserBox = style({
  width: '82.5rem',
  height: '17.875rem',
  position: 'relative',
  backgroundColor: theme.color.background,
  borderRadius: '0.625rem',
});

export const CoverImgWrapper = style({
  width: '100%',
  height: '12.5rem',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '0.625rem',
});

export const ChangeCoverButton = style({
  ...theme.typo.Body3,
  fontWeight: '500',
  color: theme.grayScale.white,
  width: '4.3125rem',
  height: '1.75rem',
  borderRadius: '0.3125rem',
  position: 'absolute',
  backgroundColor: theme.grayScale.gray2,
  bottom: '0.625rem',
  right: '0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: '1',
});

export const UserInfoWrapper = style({
  width: '75.625rem',
  height: '9.375rem',
  position: 'absolute',
  top: '8.5rem',
  left: '5.625rem',
  display: 'flex',
});

export const ProfileImgWrapper = style({
  width: '9.375rem',
  height: '9.375rem',
  overflow: 'hidden',
  borderRadius: '100%',
  backgroundColor: 'pink',
  position: 'relative',
  marginRight: '2.25rem',
  zIndex: '1',
});

export const ContentWrap = style({
  flex: '1',
  height: '5.375rempx',
  marginTop: '4rem',
});

export const UserId = style({
  ...theme.typo.h4,
  color: theme.grayScale.white,
  margin: '0.625rem 0 0.75rem 0.25rem',
});

export const ButtonWrapper = style({
  width: '100%',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const FollowshipButtonWrapper = style({
  width: '16.4375rem',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const FollowerButton = style({
  width: '8.3125rem',
  height: '2.5rem',
  backgroundColor: '#242424',
  ...theme.typo.Body1,
  fontWeight: '500',
  color: theme.grayScale.white,
  borderRadius: '0.625rem',
});

export const FollowingButton = style({
  width: '7.375rem',
  height: '2.5rem',
  backgroundColor: '#242424',
  ...theme.typo.Body1,
  fontWeight: '500',
  color: theme.grayScale.white,
  borderRadius: '0.625rem',
});

export const HandleInfoButton = style({
  ...theme.typo.Body2,
  fontWeight: '400',
  color: theme.grayScale.gray,
  background: 'none',
});
