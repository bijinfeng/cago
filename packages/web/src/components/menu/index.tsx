import { cn } from "@pingtou/ui"
import React from "react"
import { Link, useMatch } from "react-router-dom"
import { IconButton } from "@/components/icon-button"

export interface IMenuItem {
  label: React.ReactNode
  value: string
  icon?: React.ReactNode
}

interface IMenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: IMenuItem
  isCollapsed?: boolean
}

interface IMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: IMenuItem[]
  isCollapsed?: boolean
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { item, className, isCollapsed, ...rest } = props
  const actived = useMatch(item.value)

  const renderIcon = () => React.isValidElement(item.icon) ? React.cloneElement(item.icon) : null

  if (isCollapsed) {
    return (
      <IconButton tooltip={item.label} className="w-8 h-8">
        {renderIcon()}
      </IconButton>
    )
  }

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
      {renderIcon()}
      <span>{item.label}</span>
    </button>
  )
}

const Menu: React.FC<IMenuProps> = (props) => {
  const { items, className, isCollapsed, ...rest } = props

  return (
    <div className={cn("space-y-1", className, { "flex flex-col items-center ": isCollapsed })} {...rest}>
      {items.map(item => (
        <Link to={item.value} key={item.value} className="flex">
          <MenuItem item={item} isCollapsed={isCollapsed} />
        </Link>
      ))}
    </div>
  )
}

export default Menu
