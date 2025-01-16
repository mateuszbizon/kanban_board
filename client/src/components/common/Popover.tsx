import { cn } from "@/lib/utils";

type Unit = "px" | "%" | "rem" | "em"

type Width = `${number}${Unit}` | "auto"

type PopoverProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    top?: Width;
    bottom?: Width;
    left?: Width;
    right?: Width;
    isOpen: boolean;
    centerX?: boolean;
    centerY?: boolean;
    position?: "absolute" | "fixed"
}

function Popover({ children, top, bottom, left, right, isOpen, centerX, centerY, position = "absolute", className, ...props }: PopoverProps) {
    const transformX = centerX ? "-50%": "0"
    const transformY = centerY ? "-50%": "0"
    top = centerY ? "50%" : top
    bottom = centerY ? "auto" : bottom
    left = centerX ? "50%" : left
    right = centerX ? "auto" : right

  return (
    <div
        className={cn(`p-main bg-white rounded-lg z-50 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`, className)}
        style={{ position, top, bottom, left, right, transform: `translate(${transformX}, ${transformY})` }}    
        {...props} 
    >
        {children}
    </div>
  )
}

export default Popover