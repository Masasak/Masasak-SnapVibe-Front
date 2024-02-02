const SearchIconColor = {
  white: '#ffffff',
  gray: '#888888',
} as const;

type SearchIconColorType = keyof typeof SearchIconColor;

interface SearchIconProps {
  color: SearchIconColorType;
}

const SearchIcon: React.FC<SearchIconProps> = ({ color }) => (
  <svg
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 14L10.5354 10.5353M10.5354 10.5353C11.4731 9.59759 11.9999 8.32577 11.9999 6.99964C11.9999 5.67351 11.4731 4.40169 10.5354 3.46397C9.59765 2.52625 8.32583 1.99945 6.9997 1.99945C5.67357 1.99945 4.40175 2.52625 3.46403 3.46397C2.52632 4.40169 1.99951 5.67351 1.99951 6.99964C1.99951 8.32577 2.52632 9.59759 3.46403 10.5353C4.40175 11.473 5.67357 11.9998 6.9997 11.9998C8.32583 11.9998 9.59765 11.473 10.5354 10.5353Z"
      stroke={SearchIconColor[color]}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
