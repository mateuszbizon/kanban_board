import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-main-purple text-white hover:bg-main-purple-hover",
				secondary: "bg-[#635FC7]/10 text-main-purple hover:bg-[#635FC7]/25 dark:bg-white dark:hover:bg-white",
				delete: "bg-red text-white hover:bg-red-hover",
				transparent: "bg-transparent",
				sidebar: "text-medium-grey bg-white hover:bg-[#635FC7]/10 dark:bg-dark-grey dark:hover:bg-white hover:text-main-purple rounded-r-3xl rounded-l-none justify-start",
				"sidebar-active": "text-white bg-main-purple rounded-r-3xl rounded-l-none justify-start",
			},
			size: {
				default: "text-2xs py-2 px-4 font-bold",
				lg: "text-2sm py-3 px-6",
				sidebar: "text-2sm py-4 px-main",
				icon: "p-4",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
