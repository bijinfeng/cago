import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@pingtou/ui"
import React from "react"
import GardenIcon from "@/assets/garden.svg"
import LineDataIcon from "@/assets/line-data.svg"
import LogoutIcon from "@/assets/logout.svg"
import SettingIcon from "@/assets/setting.svg"
import LanguageCheck from "@/components/language-check"
import ThemeCheck from "@/components/theme-check"

interface NavItemProps {
  label: string
  icon: React.ReactElement
  href: string
}

const navList: Array<NavItemProps> = [
  {
    label: "我的花园",
    icon: <GardenIcon />,
    href: "/dashboard",
  },
  {
    label: "创作中心",
    icon: <LineDataIcon />,
    href: "/line-data",
  },
  {
    label: "账号设置",
    icon: <SettingIcon />,
    href: "/setting",
  },
]

const UserNav: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8">
          <Avatar className="h-6 w-6">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal flex items-center space-x-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navList.map(nav => (
            <DropdownMenuItem key={nav.label} className="flex items-center space-x-2">
              {React.cloneElement(nav.icon, { width: 16, height: 16 })}
              <span>{nav.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <div className="flex space-x-2">
          <DropdownMenuItem className="flex flex-1 items-center space-x-2">
            <LogoutIcon width={16} height={16} />
            <span>退出登录</span>
          </DropdownMenuItem>
          <LanguageCheck />
          <ThemeCheck />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav
