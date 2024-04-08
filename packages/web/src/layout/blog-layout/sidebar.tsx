import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, Separator, buttonVariants, cn } from "@pingtou/ui"
import React, { useState } from "react"
import { LuHome } from "react-icons/lu"
import { Link, useLocation } from "react-router-dom"
import { BookActions } from "./book-actions"
import { BookCata } from "./book-cata"
import BookIcon from "@/assets/book-type/default.svg?react"
import DirectoryPosition from "@/assets/directory-position.svg?react"
import ExpandIcon from "@/assets/expand.svg?react"
import FoldIcon from "@/assets/fold.svg?react"
import { AddDoc } from "@/components/add-doc"
import { Catalog } from "@/components/catalog"
import { GlobalSearch } from "@/components/global-search"
import { IconButton } from "@/components/icon-button"
import { Logo } from "@/components/logo"

function ExpandButton() {
  const [isExpanded, setExpanded] = useState(false)

  return (
    <IconButton
      tooltip={isExpanded ? "全部折叠" : "全部展开"}
      className="w-5 h-5 p-0.5 text-muted-foreground"
      onClick={() => setExpanded(!isExpanded)}
    >
      {isExpanded ? <ExpandIcon className="text-base" /> : <FoldIcon className="text-base" />}
    </IconButton>
  )
}

const Sidebar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="flex flex-col h-full">
      <div className="px-2.5 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Logo />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>个人知识库</BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center justify-between h-9 mt-1.5 mb-3">
          <div className="flex items-center">
            <BookIcon width={20} height={20} />
            <span className="ml-3 text-base font-bold">个人博客</span>
          </div>
          <BookActions />
        </div>
        <Separator />
      </div>
      <div className="px-2.5">
        <div className="flex items-center gap-3 ">
          <GlobalSearch />
          <AddDoc />
        </div>
        <Link
          to={location.pathname}
          className={cn(buttonVariants({ variant: "ghost" }), "flex items-center justify-start gap-3 w-full mt-2.5 h-8 px-2")}
        >
          <LuHome size={16} />
          首页
        </Link>
        <div className="mt-2.5 flex items-center justify-between">
          <BookCata />
          <div className="flex items-center gap-2">
            <IconButton tooltip="目录定位" className="w-5 h-5 p-0.5 text-muted-foreground">
              <DirectoryPosition className="text-base" />
            </IconButton>
            <ExpandButton />
          </div>
        </div>
      </div>
      <Catalog />
    </div>
  )
}

export default Sidebar
