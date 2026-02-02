import { cn } from "@/lib/utils"; // adjust path if needed

interface BackButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const BackButton = ({ text, className, onClick }: BackButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center cursor-pointer text-gray-700 hover:text-gray-900 font-medium transition-colors",
        className,
      )}
    >
      <span>
        <svg
          width="10"
          height="20"
          viewBox="0 0 15 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 25L0 12.5L12.5 0L14.7188 2.21875L4.4375 12.5L14.7188 22.7812L12.5 25Z"
            fill="url(#paint0_linear_213_1300)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_213_1300"
              x1="0"
              y1="0"
              x2="16.5831"
              y2="1.30475"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.115385" stopColor="#FEAC1A" />
              <stop offset="0.875" stopColor="#F84426" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="TextGradient pl-2">{text}</span>
    </button>
  );
};

export default BackButton;
