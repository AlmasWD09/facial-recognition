import { cn } from "@/src/lib/utils";


interface titleProps {
  text: string;
  svg?: React.ReactNode;
  className?: string;
  iconStyle?: string;
}

function SubTitle({ text, className }: titleProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center text-base text-[#000000] font-semibold text-[24px] md:text-[40px]",
        className
      )}
    >
      {text}
    </div>
  );
}

export default SubTitle;