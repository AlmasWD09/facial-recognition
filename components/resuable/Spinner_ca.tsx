import { cn } from "@/lib/utils";


type SpinnerCaProps = {
  className?: string;
  textClassName?: string;
    svgClassName?: string;
  text?: string;
};

const SpinnerCa = ({
  className,
  textClassName,
  svgClassName,
  text = "Loading...",
}: SpinnerCaProps) => {
  return (
    <div
      className={cn("flex items-center justify-center space-x-2", className)}
    >
      <svg
        className={cn("h-5 w-5 animate-spin text-white",svgClassName)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
        <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
        <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
        <circle cx="12" cy="12" r="10" />
      </svg>

      <span className={cn("text-sm text-white", textClassName)}>{text}</span>
    </div>
  );
};

export default SpinnerCa;
