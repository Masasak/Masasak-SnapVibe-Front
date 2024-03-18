import { style } from '@vanilla-extract/css';
import { theme } from 'styles';

export const MyPageUserBox = style({
  width: '82.5rem',
  height: '286px',
  position: 'relative',
  backgroundColor: 'blue',
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
});

export const UserInfoWrapper = style({
  width: '75.625rem',
  height: '9.375rem',
  backgroundColor: 'red',
  position: 'absolute',
  top: '8.5rem',
  left: '5.625rem',
  display: 'flex',
  justifyContent: 'space-between',
});

export const UserProfileWrapper = style({
  width: '28.0625rem',
  height: '9.375rem',
  backgroundColor: 'yellow',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
});

export const ProfileImgWrapper = style({
  width: '9.375rem',
  height: '9.375rem',
  overflow: 'hidden',
  zIndex: '1',
  borderRadius: '100%',
  backgroundColor: 'pink',
  position: 'relative',
});

export const ProfileContentsWrapper = style({
  width: '16.4375rem',
  height: '9.375rem',
  backgroundColor: 'green',
});

export const UserId = style({
  ...theme.typo.h4,
  fontWeight: '500',
  color: theme.grayScale.white,
  margin: '4.625rem 0 0.75rem 0',
});

export const ButtonWrapeer = style({
  width: '100%',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const FollowshipButton = style({
  width: 'fit-content',
  height: 'fit-content',
  padding: ' 0.5625rem 1.125rem 0.625rem 1.125rem',
  ...theme.typo.Body1,
  fontWeight: '500',
  color: theme.grayScale.white,
  borderRadius: '0.625rem',
  backgroundColor: '#242424',
});

// export const ButtonContainer = style({
//   width: '16.4375rem',
//   height: '100%',
//   display: 'flex',
//   justifyContent: 'space-between',
// });

// export const FollowerButton = style({
//   width: '8.3125rem',
//   height: '2.5rem',
//   backgroundColor: '#242424',
//   ...theme.typo.Body1,
//   fontWeight: '500',
//   color: theme.grayScale.white,
//   borderRadius: '0.625rem',
// });

// export const FollowingButton = style({
//   width: '7.375rem',
//   height: '2.5rem',
//   backgroundColor: '#242424',
//   ...theme.typo.Body1,
//   fontWeight: '500',
//   color: theme.grayScale.white,
//   borderRadius: '0.625rem',
// });

export const HandleInfoButtonWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  paddingTop: '56px',
});

export const HandleInfoButton = style({
  ...theme.typo.Body2,
  fontWeight: '400',
  color: theme.grayScale.gray,
  background: 'none',
});
