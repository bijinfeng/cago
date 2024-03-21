import { Avatar, AvatarFallback, AvatarImage, Button, Separator, buttonVariants, cn } from "@pingtou/ui"
import { ChevronLeft, KeyRound, LayoutGrid, LineChart, Settings, ShieldCheck, User } from "lucide-react"
import React from "react"
import type { NavLinkProps } from "react-router-dom"
import { NavLink, Outlet } from "react-router-dom"
import { Logo } from "@/components/logo"

const LinkButton: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(buttonVariants({
        variant: isActive ? "secondary" : "ghost",
      }), "h-8 w-full justify-start gap-2 my-[3px]", { "font-semibold": isActive })}
    >
      {children}
    </NavLink>
  )
}

const navs = [
  {
    title: "账号",
    children: [
      {
        title: "个人信息",
        icon: User,
        path: "/setting/profile",
      },
      {
        title: "偏好设置",
        icon: Settings,
        path: "/setting/notifications",
      },
      {
        title: "安全日志",
        icon: ShieldCheck,
        path: "/setting/safety",
      },
    ],
  },
  {
    title: "创作中心",
    children: [
      {
        title: "数据统计",
        icon: LineChart,
        path: "/setting/stats",
      },
    ],
  },
  {
    title: "开发者",
    children: [
      {
        title: "Token",
        icon: KeyRound,
        path: "/setting/tokens",
      },
      {
        title: "授权",
        icon: LayoutGrid,
        path: "/setting/authorizations",
      },
    ],
  },
]

function Setting() {
  return (
    <div className="flex h-full">
      <div className="w-56 py-4 flex flex-col">
        <div className="mx-4 my-2">
          <Button variant="ghost" className="h-8 w-full justify-start gap-2 pl-1">
            <ChevronLeft size={14} className="mr-2" />
            <Logo size={18} />
            返回
          </Button>
        </div>
        <div className="pl-8 pt-6 flex">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex-1 ml-3">
            <div className="text-base font-medium truncate pt-0.5">kebai</div>
            <div className="text-sm truncate text-muted-foreground">bijinfeng-fyjgs</div>
          </div>
        </div>
        <div className="kb-scrollbar mt-8 px-4 flex-1 space-y-8">
          {navs.map((item, index) => (
            <div key={index}>
              <div className="pl-4 pb-2 text-sm text-muted-foreground">{item.title}</div>
              {item.children.map(child => (
                <LinkButton key={child.path} to={child.path}>
                  {React.createElement(child.icon, { size: 16 })}
                  {child.title}
                </LinkButton>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 kb-scrollbar">
        <div className="pb-16 max-w-[1080px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Setting
