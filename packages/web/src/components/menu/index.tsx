import { cn } from "@pingtou/ui"
import React from "react"

export interface IMenuItem {
  label: React.ReactNode
  value: string
  icon?: React.ReactNode
}

interface IMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: IMenuItem
  actived: boolean
}

interface IMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: IMenuItem[]
  activeItem?: string
  onActiveItemChange?: (item: IMenuItem) => void
}

const MenuItem: React.FC<IMenuItemProps> = ({ item, actived, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none",
        "focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "text-secondary-foreground space-x-[10px]",
        "hover:bg-secondary/80 h-8 px-3 py-2 w-full justify-start",
        { "bg-secondary": actived },
        className,
      )}
    >
      {React.isValidElement(item.icon) ? React.cloneElement(item.icon) : null}
      <span>{item.label}</span>
    </button>
  )
}

const Menu: React.FC<IMenuProps> = ({ items, activeItem, className, onActiveItemChange, ...rest }) => {
  return (
    <div className={cn("space-y-1", className)} {...rest}>
      {items.map(item => (
        <MenuItem
          key={item.value}
          item={item}
          actived={activeItem === item.value}
          onClick={() => onActiveItemChange?.(item)}
        />
      ))}
    </div>
  )
}

export default Menu
