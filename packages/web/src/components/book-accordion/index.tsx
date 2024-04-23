import { buttonVariants, cn } from "@pingtou/ui"
import { ChevronRight, Ellipsis, GripVertical } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"
import { IconButton } from "@/components/icon-button"
import { BookIcon } from "@/components/book-icon"
import ArrowDownIcon from "@/assets/arrow-down.svg?react"

export const BookAccordion: React.FC = () => {
  const [expand, setExpand] = React.useState(true)

  const handleExpand: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setExpand(!expand)
  }

  return (
    <div className="space-y-1.5">
      <Link to="/dashboard/books" className={cn(buttonVariants({ variant: "secondary" }), "flex px-1 py-0 h-8")}>
        <IconButton
          className={cn("w-6 h-6 hover:bg-gray-200 transition-all")}
          onClick={handleExpand}
        >
          <ArrowDownIcon width={20} height={20} className={cn({ "-rotate-90": !expand })} />
        </IconButton>
        <span className="flex-1 ml-1.5">知识库</span>
        <ChevronRight size={16} className="mr-1.5" />
      </Link>

      <Link to="/" className={cn(buttonVariants({ variant: "ghost" }), "flex px-1 py-0 h-8 group")}>
        <IconButton className={cn("w-5 h-6 hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible")}>
          <GripVertical size={16} />
        </IconButton>
        <div className="flex-1 flex items-center">
          <BookIcon size={18} />
          <span className="ml-1.5">面试</span>
        </div>
        <IconButton className={cn("w-5 h-6 hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible")}>
          <Ellipsis size={16} />
        </IconButton>
      </Link>
    </div>
  )
}
