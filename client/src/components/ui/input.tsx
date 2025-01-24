import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = React.ComponentProps<"input"> & {
    errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, className, type, ...props }, ref) => {
    return (
        <div className="relative w-full">
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded border border-medium-grey bg-white dark:bg-dark-grey text-black dark:text-white px-4 py-2 text-2xs placeholder:text-medium-grey focus-visible:outline-none focus-visible:border-main-purple disabled:cursor-not-allowed disabled:opacity-50",
                    errorMessage && "border-red",
                    className
                )}
                ref={ref}
                {...props}
            />
            {errorMessage && (
                <span className="absolute top-1/2 right-3 -translate-y-1/2 text-red text-2xs">{errorMessage}</span>
            )}
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
