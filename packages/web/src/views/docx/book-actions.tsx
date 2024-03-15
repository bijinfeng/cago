import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@pingtou/ui"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import DirectoryIcon from "@/assets/directory.svg?react"
import MoreSettingIcon from "@/assets/more-settings.svg?react"
import PermissionIcon from "@/assets/permission.svg?react"
import StatisticeIcon from "@/assets/statistics.svg?react"

export function BookActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[160px]">
        <DropdownMenuItem className="flex items-center gap-2.5">
          <PermissionIcon />
          权限
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2.5">
          <StatisticeIcon />
          统计
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2.5">
          <DirectoryIcon />
          目录管理
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2.5">
          <MoreSettingIcon />
          更多设置
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
