export interface PostCardTypes {
  content: string;
  images: string;
  author: {
    id: string;
    nickname: string;
    profileImageUrl?: string;
    isFollowed: boolean;
  };
  isHeart: boolean;
  createdAt: string;
}
