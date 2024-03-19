import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  cn,
} from "@pingtou/ui"
import { LuMoreVertical } from "react-icons/lu"
import CopyIcon from "@/assets/copy.svg?react"
import DeleteIcon from "@/assets/delete.svg?react"
import MoveIcon from "@/assets/move.svg?react"
import RemoveDirectoriesIcon from "@/assets/remove-directories.svg?react"
import RenameIcon from "@/assets/rename.svg?react"

interface IMoreActionProps {
  className?: string
}

export const MoreAction: React.FC<IMoreActionProps> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("w-6 h-6 hover:bg-gray-200", className)}>
          <LuMoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuItem>
          <RenameIcon width={16} height={16} className="mr-1.5" />
          重命名
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <RemoveDirectoriesIcon width={16} height={16} className="mr-1.5" />
          移出目录
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CopyIcon width={16} height={16} className="mr-1.5" />
          复制
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MoveIcon width={16} height={16} className="mr-1.5" />
          移动
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <DeleteIcon width={16} height={16} className="mr-1.5" />
          删除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
