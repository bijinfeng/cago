import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@pingtou/ui"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import BoardTypeIcon from "@/assets/doc-type/board.svg?react"
import DocTypeIcon from "@/assets/doc-type/default.svg?react"
import SheetTypeIcon from "@/assets/doc-type/sheet.svg?react"
import TableTypeIcon from "@/assets/doc-type/table.svg?react"
import ImportIcon from "@/assets/import.svg?react"
import NewbookIcon from "@/assets/newbook.svg?react"
import NewdocIcon from "@/assets/newdoc.svg?react"
import TemplateIcon from "@/assets/template.svg?react"

export const CreateDoc: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="rounded-lg border transition-all hover:bg-accent flex items-center space-x-4 px-4 py-2 w-[260px]">
            <NewdocIcon width={22} height={22} />
            <div className="space-y-1 text-left flex-1">
              <div className="text-sm font-medium">新建文档</div>
              <div className="text-xs font-normal text-muted-foreground">文档、表格、画板、数据表</div>
            </div>
            <LuChevronDown size={14} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[260px]">
          <DropdownMenuItem className="flex items-center h-10">
            <DocTypeIcon width={18} height={18} className="mr-3" />
            <span>新建文档</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center h-10">
            <SheetTypeIcon width={18} height={18} className="mr-3" />
            <span>新建表格</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center h-10">
            <BoardTypeIcon width={18} height={18} className="mr-3" />
            <span>新建画板</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center h-10">
            <TableTypeIcon width={18} height={18} className="mr-3" />
            <span>新建数据表</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center h-10">
            <ImportIcon width={18} height={18} className="mr-3" />
            <span>导入...</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button className="rounded-lg border transition-all hover:bg-accent flex items-center space-x-4 px-4 py-2 w-[260px]">
        <NewbookIcon width={22} height={22} />
        <div className="space-y-1 text-left">
          <div className="text-sm font-medium">新建知识库</div>
          <div className="text-xs font-normal text-muted-foreground">使用知识库整理知识</div>
        </div>
      </button>
      <button className="rounded-lg border transition-all hover:bg-accent flex items-center space-x-4 px-4 py-2 w-[260px]">
        <TemplateIcon width={22} height={22} />
        <div className="space-y-1 text-left">
          <div className="text-sm font-medium">模板中心</div>
          <div className="text-xs font-normal text-muted-foreground">从模板中获取灵感</div>
        </div>
      </button>
    </div>
  )
}
