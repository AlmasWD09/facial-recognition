import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";


interface ModalProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  title: string;
 subtitle?: React.ReactNode;
  titleStyle?: string;
  mainStyle?: string;
  style?: string;
}

export default function Modal({
  open,
  setIsOpen,
  children,
  className,
  title,
  subtitle,
  titleStyle,
  mainStyle,
  style,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild />
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        // overlyStyle={`${style} transition-opacity duration-200`}
        className={cn(
          "sm:max-w-md p-0 gap-0 bg-background rounded-2xl overflow-y-auto  max-h-[95vh] h-fit scrollbar-hide border-none",
          className,
          style
        )}
      >
        <DialogHeader className="text-white px-4 pt-4">
          <DialogTitle
            className={cn("text-black font-semibold mt-2", titleStyle)}
          >
            <div className="flex flex-col">
              <span>{title}</span>
              {subtitle && (
                <span className="">
                  {subtitle}
                </span>
              )}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        <div className={cn("p-4", mainStyle)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
