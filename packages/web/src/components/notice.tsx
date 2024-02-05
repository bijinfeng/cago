import { Button, Dialog, DialogContent, DialogTrigger, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React from "react"
import NoticeIcon from "@/assets/notice.svg"

const Notice: React.FC = () => {
  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger>
          <DialogTrigger asChild>
            <Button asChild variant="ghost" size="icon" className="w-[28px] h-[28px] p-[5px]">
              <NoticeIcon />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          消息中心
        </TooltipContent>
      </Tooltip>

      <DialogContent className="max-w-[880px]">
        <div className="flex">
          <div></div>
          <div></div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Notice
