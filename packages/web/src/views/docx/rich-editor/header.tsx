import { Button, Input } from "@pingtou/ui"
import React, { useState } from "react"
import CommentReplyIcon from "@/assets/comment-reply.svg?react"
import DigitalgardenIcon from "@/assets/digitalgarden.svg?react"
import InviteIcon from "@/assets/invite.svg?react"
import PresentIcon from "@/assets/present.svg?react"
import PublicIcon from "@/assets/public.svg?react"
import RightBoardIcon from "@/assets/rightboard.svg?react"
import StarIcon from "@/assets/star-outlined.svg?react"
import { IconButton } from "@/components/icon-button"

export type RightSideTypes = "common" | "advanced"

interface IHeaderProps {
  rightSideType?: RightSideTypes
  setRightSideType?: (type?: RightSideTypes) => void
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { rightSideType, setRightSideType } = props

  const [isInputFocus, setIsInputFocus] = useState(false)
  const [inputText, setInputText] = useState("数据栈-文件云存储产品方案")

  const handleSetType = (type: RightSideTypes) => {
    if (type === rightSideType)
      setRightSideType?.(undefined)
    else
      setRightSideType?.(type)
  }

  return (
    <div className="flex items-center justify-between border-b">
      <div className="flex items-center px-4 py-2.5">
        {isInputFocus
          ? (
            <Input className="w-52 h-8" autoFocus value={inputText} onChange={e => setInputText(e.target.value)} onBlur={() => setIsInputFocus(false)} />
            )
          : <span className="max-w-96 truncate text-sm leading-8" onClick={() => setIsInputFocus(true)}>{inputText}</span>}

        <IconButton className="ml-1.5 w-5 h-5" tooltip="互联网所有人可访问">
          <PublicIcon width={14} height={14} className="text-secondary-foreground" />
        </IconButton>
      </div>

      <div className="flex items-center gap-2 pr-4">
        <IconButton tooltip="收藏" className="w-8 h-8">
          <StarIcon width={20} height={20} />
        </IconButton>

        <IconButton tooltip="协作" className="w-8 h-8">
          <InviteIcon width={20} height={20} />
        </IconButton>

        <IconButton tooltip="演示：P" className="w-8 h-8">
          <PresentIcon width={20} height={20} />
        </IconButton>

        <IconButton tooltip="分享到花园" className="w-8 h-8">
          <DigitalgardenIcon width={20} height={20} />
        </IconButton>

        <Button variant="outline" className="h-8">分享</Button>

        <Button className="h-8">编辑</Button>

        <div className="border rounded-md box-border h-8 w-16 flex items-center justify-between px-[3px]">
          <IconButton className="w-[26px] h-[26px]" actived={rightSideType === "common"} onClick={() => handleSetType("common")}>
            <CommentReplyIcon width={16} height={16} />
          </IconButton>
          <IconButton className="w-[26px] h-[26px]" actived={rightSideType === "advanced"} onClick={() => handleSetType("advanced")}>
            <RightBoardIcon width={16} height={16} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
