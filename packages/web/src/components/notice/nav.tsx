import React from "react"
import type { IMenuItem } from "@/components/menu"
import Menu from "@/components/menu"

const tabList: Array<IMenuItem> = [
  {
    label: "全部消息",
    value: "",
  },
  {
    label: "关注",
    value: "follow",
  },
  {
    label: "点赞",
    value: "like",
  },
  {
    label: "@ 和评论",
    value: "mention",
  },
  {
    label: "待处理",
    value: "action",
  },
  {
    label: "系统通知",
    value: "system",
  },
  {
    label: "其他消息",
    value: "normal",
  },
]

interface NavProps {
  activeTab: string
  onTabChange: (value: string) => void
}

const Nav: React.FC<NavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="space-y-2 w-[132px]">
      <Menu items={tabList} />
    </div>
  )
}

export default Nav
