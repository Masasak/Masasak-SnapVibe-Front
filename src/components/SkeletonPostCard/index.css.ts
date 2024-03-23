import { style, createVar, keyframes } from '@vanilla-extract/css';
import { theme } from 'styles';

export const widthVar = createVar();
export const marginBottomVar = createVar();

export const ContentRotate = keyframes({
  '0%': { backgroundColor: theme.grayScale.gray2 },
  '100%': { backgroundColor: theme.grayScale.Lightgray },
});

export const PostCardWrapper = style({
  width: '26.25rem',
  height: '26.25rem',
  borderRadius: '0.625rem',
  position: 'relative',
});

export const TitleImgContainer = style({
  width: '26.25rem',
  height: '17.5rem',
  animation: `${ContentRotate} 1.3s  infinite ease-in-out`,
  borderTopRightRadius: '0.625rem',
  borderTopLeftRadius: '0.625rem',
});

export const CardContentContainer = style({
  width: '26.25rem',
  height: '8.75rem',
  backgroundColor: '#222222',
  borderBottomRightRadius: '0.625rem',
  borderBottomLeftRadius: '0.625rem',
  padding: '2.125rem 1.5rem 1.4375rem 1.5rem',
});

export const ContentWrapper = style({
  flex: '1',
  height: '1.3125rem',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.375rem',
});

export const ContentContainer = style({
  width: widthVar,
  height: '1.3125rem',
  animation: `${ContentRotate} 1.3s  infinite ease-in-out`,
  borderRadius: '0.3125rem',
  marginBottom: marginBottomVar,
});

export const ProfileImgContainer = style({
  width: '5rem',
  height: '5rem',
  borderRadius: '100%',
  border: '5px solid #222222',
  animation: `${ContentRotate} 1.3s  infinite ease-in-out`,
  position: 'absolute',
  top: '13.75rem',
  left: '1rem',
  boxSizing: 'unset',
});
