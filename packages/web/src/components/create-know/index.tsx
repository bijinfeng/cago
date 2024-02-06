import React from "react"
import NewbookIcon from "@/assets/newbook.svg"

const CreateKnow: React.FC = () => {
  return (
    <button className="rounded-lg border transition-all hover:bg-accent flex items-center space-x-4 px-4 py-2 w-[260px]">
      <NewbookIcon width={22} height={22} />
      <div className="space-y-1 text-left">
        <div className="text-sm font-medium">新建数据库</div>
        <div className="text-xs font-normal text-muted-foreground">使用知识库整理知识</div>
      </div>
    </button>
  )
}

export default CreateKnow
