import type React from "react";

import clsx from "clsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  titleStyle?: string;
  mainStyle?: string;
  title?: string;
  subtitle?: React.ReactNode;
  style?: string;
}

export default function Modal2({
  open,
  setIsOpen,
  children,
  className,
  titleStyle,
  title,
  subtitle,
  mainStyle,
  style,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger asChild />
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        // overlyStyle={`${style} transition-opacity duration-200`}
        className={clsx(
          `sm:max-w-md p-0 gap-0 bg-background rounded-2xl overflow-y-auto  max-h-[95vh] h-fit scrollbar-hide border-none`,
          className,
          style,
        )}
      >
        <DialogHeader className="text-white px-4 pt-4">
          <DialogTitle
            className={cn("text-black font-semibold mt-1 mb-3", titleStyle)}
          >
            <div className="flex flex-col">
              <span>{title}</span>
              {subtitle && <span className="">{subtitle}</span>}
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>
        <div className={clsx("p-4", mainStyle)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
