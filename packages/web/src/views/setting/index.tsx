import { Avatar, AvatarFallback, AvatarImage, Button, Separator, buttonVariants, cn } from "@pingtou/ui"
import { LuChevronLeft, LuSettings, LuUser } from "react-icons/lu"
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

function Setting() {
  return (
    <div className="flex h-full">
      <div className="w-56 py-4">
        <div className="mx-4 my-2">
          <Button variant="ghost" className="h-8 w-full justify-start gap-2 pl-1">
            <LuChevronLeft size={14} className="mr-2" />
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
            <div className="text-sm truncate text-secondary-foreground">bijinfeng-fyjgs</div>
          </div>
        </div>
        <div className="kb-scrollbar px-4">
          <div className="pl-4 pt-8 pb-2 text-sm text-secondary-foreground">账号</div>
          <LinkButton to="/setting/profile">
            <LuUser size={16} />
            个人信息
          </LinkButton>
          <LinkButton to="/setting/notifications">
            <LuSettings size={16} />
            偏好设置
          </LinkButton>
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1">
        <div className=" max-w-[1080px] mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Setting
