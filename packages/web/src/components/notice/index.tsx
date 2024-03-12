import { Dialog, DialogContent, DialogTrigger, Separator, Tooltip, TooltipContent, TooltipTrigger } from "@pingtou/ui"
import React, { useState } from "react"
import Content from "./content"
import Nav from "./nav"
import { IconButton } from "@/components/icon-button"
import SettingIcon from "@/assets/setting.svg?react"
import NoticeIcon from "@/assets/notice.svg?react"

const Notice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton tooltip="消息中心" className="w-8 h-8">
          <NoticeIcon width={18} height={18} />
        </IconButton>
      </DialogTrigger>

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
