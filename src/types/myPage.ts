export interface myPageTypes {
  user: {
    id: string;
    name: string;
    nickName: string;
    followers: number;
    followings: number;
    profileImageUrl?: string;
    profileCoverImage?: string;
  };
}
