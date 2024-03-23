interface UserIconProps {
  size?: string;
}

const UserIcon: React.FC<UserIconProps> = ({ size }) => (
  <svg
    width={size ? size : '1.75rem'}
    height={size ? size : '1.75rem'}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3748 7C18.3748 8.16032 17.9139 9.27312 17.0934 10.0936C16.2729 10.9141 15.1601 11.375 13.9998 11.375C12.8395 11.375 11.7267 10.9141 10.9062 10.0936C10.0857 9.27312 9.62481 8.16032 9.62481 7C9.62481 5.83968 10.0857 4.72688 10.9062 3.90641C11.7267 3.08594 12.8395 2.625 13.9998 2.625C15.1601 2.625 16.2729 3.08594 17.0934 3.90641C17.9139 4.72688 18.3748 5.83968 18.3748 7ZM5.25098 23.471C5.28847 21.1754 6.2267 18.9865 7.86335 17.3764C9.5 15.7663 11.7039 14.8639 13.9998 14.8639C16.2957 14.8639 18.4996 15.7663 20.1363 17.3764C21.7729 18.9865 22.7112 21.1754 22.7486 23.471C20.0039 24.7296 17.0193 25.3791 13.9998 25.375C10.8778 25.375 7.91448 24.6937 5.25098 23.471Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
