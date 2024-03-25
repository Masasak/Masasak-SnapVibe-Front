interface CancelIconProps {
  size?: string;
}
const DEFAULT_SIZE = '1.5rem' as const;

const CacnelIcon: React.FC<CancelIconProps> = ({ size = DEFAULT_SIZE }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 18L18 6M6 6L18 18"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CacnelIcon;
