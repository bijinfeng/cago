import Image from "next/image"
import React from "react"
import Notice from "@/components/notice"

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="pt-[10px]">
        <div className="px-3 flex items-center">
          <Image src="logo.svg" alt="logo" width={28} height={28} />
          <Notice />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
