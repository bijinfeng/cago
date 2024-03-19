import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@pingtou/ui"
import { LuCheck } from "react-icons/lu"
import DirectoryIcon from "@/assets/directory.svg?react"

export function BookCata() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center justify-start gap-3 h-8 px-2">
          <DirectoryIcon />
          目录
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="start">
        <DropdownMenuItem key="directory" className="w-36 flex items-center">
          <DirectoryIcon className="mr-1.5" />
          <span className="flex-1">目录</span>
          <LuCheck />
        </DropdownMenuItem>
        <DropdownMenuItem key="list" className="w-36 flex items-center">
          <DirectoryIcon className="mr-1.5" />
          <span className="flex-1">全部文档</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
