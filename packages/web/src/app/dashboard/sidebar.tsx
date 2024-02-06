import Image from "next/image"
import React from "react"
import GlobalSearch from "@/components/global-search"
import Notice from "@/components/notice"
import UserNav from "@/components/user-nav"

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
      <div className="flex px-3 my-4">
        <GlobalSearch />
      </div>
    </div>
  )
}

export default Sidebar
