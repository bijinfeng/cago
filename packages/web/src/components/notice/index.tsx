import { Button, Dialog, DialogContent, DialogTrigger, Separator, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React, { useState } from "react"
import Content from "./content"
import Nav from "./nav"
import SettingIcon from "@/assets/setting.svg"
import NoticeIcon from "@/assets/notice.svg"

const Notice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("")

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

      <DialogContent className="max-w-[880px] p-0">
        <div className="flex max-h-[610px]">
          <div className="px-3 py-4 space-y-[26px]">
            <div className="px-3 text-base font-medium">消息中心</div>
            <Nav activeTab={activeTab} onTabChange={setActiveTab} />
            <div className="ml-3">
              <Tooltip>
                <TooltipTrigger>
                  <SettingIcon />
                </TooltipTrigger>
                <TooltipContent>
                  消息设置
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <Separator orientation="vertical" />
          <div className="flex-1">
            <Content />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Notice
