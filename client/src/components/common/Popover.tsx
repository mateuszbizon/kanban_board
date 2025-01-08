type Unit = "px" | "%" | "rem" | "em"

type Width = `${number}${Unit}` | "auto"

type PopoverProps = {
    children: React.ReactNode;
    top?: Width;
    bottom?: Width;
    left?: Width;
    right?: Width;
    isOpen: boolean;
}

function Popover({ children, top, bottom, left, right, isOpen }: PopoverProps) {
  return (
    <div 
        className={`absolute p-main bg-white rounded-lg z-50 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ top: top, bottom: bottom, left: left, right: right }}    
    >
        {children}
    </div>
  )
}

export default Popover