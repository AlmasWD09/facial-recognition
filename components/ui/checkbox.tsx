// "use client"

// import * as React from "react"
// import { CheckIcon } from "lucide-react"
// import { Checkbox as CheckboxPrimitive } from "radix-ui"

// import { cn } from "@/lib/utils"

// function Checkbox({
//   className,
//   ...props
// }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
//   return (
//     <CheckboxPrimitive.Root
//       data-slot="checkbox"
//       className={cn(
//         "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
//         className
//       )}
//       {...props}
//     >
//       <CheckboxPrimitive.Indicator
//         data-slot="checkbox-indicator"
//         className="grid place-content-center text-current transition-none"
//       >
//         <CheckIcon className="size-3.5" />
//       </CheckboxPrimitive.Indicator>
//     </CheckboxPrimitive.Root>
//   )
// }

// export { Checkbox }



"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cn } from "@/lib/utils"

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
