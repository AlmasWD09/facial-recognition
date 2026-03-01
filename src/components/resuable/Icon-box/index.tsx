
import { cn } from "@/src/lib/utils";



interface IconBoxProps  {
  className?: string;
  children?: React.ReactNode; 
}

export default function IconBox({ children, className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "size-11 grid bg-white mx-auto place-items-center rounded-full",
        className
      )}
    >
      {children}
    </div>
  );
}
