import { buttonVariants, cn } from "@pingtou/ui"
import { ChevronLeft } from "lucide-react"
import React from "react"
import { Link, Outlet, matchPath } from "react-router-dom"
import BookIcon from "@/assets/book-type/default.svg?react"
import CommentReplyIcon from "@/assets/comment-reply.svg?react"
import DeleteIcon from "@/assets/delete.svg?react"
import HelpDocIcon from "@/assets/helpdoc.svg?react"
import PermissionIcon from "@/assets/permission.svg?react"
import SafeSettingIcon from "@/assets/safesetting.svg?react"
import SettingIcon from "@/assets/setting.svg?react"
import StatisticsIcon from "@/assets/statistics.svg?react"

const navs = [
  {
    label: "设置",
    children: [
      {
        label: "知识库信息",
        to: "/docx-setting",
        icon: HelpDocIcon,
      },
      {
        label: "权限",
        to: "/docx-setting/collaborators",
        icon: PermissionIcon,
      },
      {
        label: "安全设置",
        to: "/docx-setting/security",
        icon: SafeSettingIcon,
      },
      {
        label: "更多设置",
        to: "/docx-setting/advanced",
        icon: SettingIcon,
      },
    ],
  },
  {
    label: "高级功能",
    children: [
      {
        label: "统计",
        to: "/docx-setting/statistics",
        icon: StatisticsIcon,
      },
      {
        label: "消息推送",
        to: "/docx-setting/webhooks",
        icon: CommentReplyIcon,
      },
      {
        label: "回收站",
        to: "/docx-setting/trash",
        icon: DeleteIcon,
      },
    ],
  },
]

const DocxSetting: React.FC = () => {
  const isMatch = (path: string) => {
    return !!matchPath(path, location.pathname)
  }

  return (
    <div className="flex h-full">
      <div className="w-64 p-4 kb-scrollbar border-r flex flex-col gap-1.5">
        <Link
          to="/docx"
          className={cn(buttonVariants({ variant: "ghost" }), "flex items-center justify-start w-full h-9 px-2 text-muted-foreground")}
        >
          <ChevronLeft size={20} className="mr-3" />
          <BookIcon width={24} height={24} className="mr-2" />
          <span className="text-sm">个人博客</span>
        </Link>
        <h4 className="ml-4 mt-5 mb-1.5 text-base font-semibold">知识库管理</h4>
        {navs.map((nav, index) => (
          <React.Fragment key={index}>
            <div className="ml-4 mt-5 mb-1.5 text-sm text-muted-foreground">{nav.label}</div>
            {nav.children.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(buttonVariants({ variant: isMatch(item.to) ? "secondary" : "ghost" }), "flex items-center justify-start w-full h-8 px-4 py-1 text-sm font-normal")}
              >
                {React.createElement(item.icon, { width: 16, height: 16, className: "mr-2" })}
                <span className="leading-6">{item.label}</span>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex-1 px-9 pt-12 pb-16">
        <Outlet />
      </div>
    </div>
  )
}

export default DocxSetting
