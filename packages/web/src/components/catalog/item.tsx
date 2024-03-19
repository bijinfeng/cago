import React from "react"
import { LuChevronRight } from "react-icons/lu"
import { AddAction } from "./add-action"
import { MoreAction } from "./more-action"
import { IconButton } from "@/components/icon-button"

interface IItemProps {
  level: number
}

export const Item: React.FC<IItemProps> = () => {
  return (
    <div className="px-2">
      <div className="flex h-9 items-center hover:bg-accent cursor-pointer rounded-md">
        <IconButton className="w-6 h-6 hover:bg-gray-200">
          <LuChevronRight size={16} />
        </IconButton>
        <span className="ml-1 text-sm flex-1 truncate">strapi</span>
        <MoreAction className="mr-2" />
        <AddAction />
      </div>
    </div>
  )
}
