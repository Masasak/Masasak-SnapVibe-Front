interface HeartIconProps {
  isLiked?: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({ isLiked }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.375rem"
    height="1.25rem"
    viewBox="0 0 22 20"
    fill="none"
  >
    <path
      d="M21 5.90909C21 3.19818 18.6678 1 15.7911 1C13.6411 1 11.7944 2.22836 11 3.98145C10.2056 2.22836 8.35889 1 6.20778 1C3.33333 1 1 3.19818 1 5.90909C1 13.7855 11 19 11 19C11 19 21 13.7855 21 5.90909Z"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={isLiked ? 'red' : 'none'}
      stroke={isLiked ? 'red' : 'white'}
    />
  </svg>
);

export default HeartIcon;
