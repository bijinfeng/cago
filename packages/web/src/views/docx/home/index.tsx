import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@pingtou/ui"
import { Ellipsis } from "lucide-react"
import React from "react"
import BookIcon from "@/assets/book-type/default.svg?react"
import DeleteIcon from "@/assets/delete.svg?react"
import PencilIcon from "@/assets/pencil.svg?react"
import Rename from "@/assets/rename.svg?react"
import SettingIcon from "@/assets/setting.svg?react"
import StarIcon from "@/assets/star-outlined.svg?react"

const Blog: React.FC = () => {
  return (
    <div className="pt-16 px-8">
      <div className="max-w-5xl mx-auto p-8 rounded-xl dark:bg-muted/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BookIcon width={38} height={38} />
            <span className="text-2xl font-bold">个人博客</span>
          </div>
          <div className="space-x-3 flex items-center">
            <Button variant="outline" className="h-8">
              <StarIcon width={16} height={16} className="mr-1.5" />
              收藏
            </Button>
            <Button variant="outline" className="h-8">分享</Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Ellipsis size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Rename width={16} height={16} className="mr-[10px]" />
                  重命名
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PencilIcon width={16} height={16} className="mr-[10px]" />
                  编辑首页
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingIcon width={16} height={16} className="mr-[10px]" />
                  更多设置
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <DeleteIcon width={16} height={16} className="mr-[10px]" />
                  删除
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
