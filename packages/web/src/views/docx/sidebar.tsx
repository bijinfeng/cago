import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, Button, Separator } from "@pingtou/ui"
import React from "react"
import { LuHome } from "react-icons/lu"
import { BookActions } from "./book-actions"
import BookIcon from "@/assets/book-type/default.svg?react"
import { AddDoc } from "@/components/add-doc"
import { GlobalSearch } from "@/components/global-search"
import { Logo } from "@/components/logo"

const Sidebar: React.FC = () => {
  return (
    <div>
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
        <Button variant="ghost" className="flex items-center justify-start gap-3 w-full mt-2.5 h-8 px-2">
          <LuHome size={14} />
          首页
        </Button>
        <div className="mt-2.5 flex items-center justify-center">

        </div>
      </div>
    </div>
  )
}

export default Sidebar
