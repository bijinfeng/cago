import { Separator } from "@pingtou/ui"
import React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "@/assets/logo.svg?react"
import NoteIcon from "@/assets/note.svg?react"
import StarOutlineIcon from "@/assets/star-outlined.svg?react"
import TimeIcon from "@/assets/time.svg?react"
import AddDoc from "@/components/add-doc"
import { BookAccordion } from "@/components/book-accordion"
import GlobalSearch from "@/components/global-search"
import { Logo } from "@/components/logo"
import type { IMenuItem } from "@/components/menu"
import Menu from "@/components/menu"
import Notice from "@/components/notice"
import UserNav from "@/components/user-nav"

const pageMenu: IMenuItem[] = [
  {
    label: "开始",
    value: "/dashboard",
    icon: <TimeIcon width={16} height={16} />,
  },
  {
    label: "小记",
    value: "/dashboard/notes",
    icon: <NoteIcon width={16} height={16} />,
  },
  {
    label: "收藏",
    value: "/dashboard/collections",
    icon: <StarOutlineIcon width={16} height={16} />,
  },
]

interface SidebarProps {
  isCollapsed: boolean
}

function CollapaedSidebar() {
  const renderSeparator = () => (
    <div className="px-5 w-full">
      <Separator />
    </div>
  )

  return (
    <div className="relative flex flex-col items-center gap-1.5 h-full">
      <Logo size={24} className="mt-3 p-1" />
      <AddDoc />
      <Notice />
      <GlobalSearch isCollapsed />
      {renderSeparator()}
      <Menu items={pageMenu} isCollapsed />

      <div className="absolute bottom-0 pb-2">
        <UserNav />
      </div>
    </div>
  )
}

function ExpandSidebar() {
  return (
    <div>
      <div className="pt-[10px]">
        <div className="px-3 flex items-center space-x-1">
          <Link to="/dashboard">
            <LogoIcon width={24} height={24} className="text-primary" />
          </Link>
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

      <div className="px-3 mt-4">
        <BookAccordion />
      </div>
    </div>
  )
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return isCollapsed ? <CollapaedSidebar /> : <ExpandSidebar />
}

export default Sidebar
