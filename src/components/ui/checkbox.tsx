



"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/src/lib/utils"


type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      className={cn(
        "ui-checkbox peer inline-flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-gray-300 bg-white shadow-sm outline-none transition-all",
        "focus-visible:ring-2 focus-visible:ring-orange-400",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      <CheckboxPrimitive.Indicator className="text-white">
        <CheckIcon className="size-3.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
