interface CheckIconProps {
  isChecked?: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({ isChecked }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.25rem"
    height="2.25rem"
    viewBox="0 0 36 36"
    fill="none"
  >
    {isChecked ? (
      <>
        <circle cx="18" cy="18" r="17.5" fill="white" stroke="white" />
        <path
          d="M10.5 18.75L16.5 24.75L25.5 11.25"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <circle cx="18" cy="18" r="17.5" stroke="white" />
    )}
  </svg>
);

export default CheckIcon;
