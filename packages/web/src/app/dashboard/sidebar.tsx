import Image from "next/image"
import React from "react"
import NoteIcon from "@/assets/note.svg"
import StarOutlineIcon from "@/assets/star-outlined.svg"
import TimeIcon from "@/assets/time.svg"
import AddDoc from "@/components/add-doc"
import GlobalSearch from "@/components/global-search"
import type { IMenuItem } from "@/components/menu"
import Menu from "@/components/menu"
import Notice from "@/components/notice"
import UserNav from "@/components/user-nav"

const pageMenu: IMenuItem[] = [
  {
    label: "开始",
    value: "/",
    icon: <TimeIcon width={16} height={16} />,
  },
  {
    label: "小计",
    value: "/xxx",
    icon: <NoteIcon width={16} height={16} />,
  },
  {
    label: "收藏",
    value: "star",
    icon: <StarOutlineIcon width={16} height={16} />,
  },
]

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="pt-[10px]">
        <div className="px-3 flex items-center space-x-1">
          <Image src="logo.svg" alt="logo" width={28} height={28} />
          <span className="flex-1" />
          <Notice />
          <UserNav />
        </div>
      </div>
      <div className="flex px-3 my-4 space-x-3">
        <GlobalSearch />
        <AddDoc />
      </div>
      <Menu className="px-3" items={pageMenu} />
    </div>
  )
}

export default Sidebar
