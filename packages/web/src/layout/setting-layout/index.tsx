import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
  buttonVariants,
  cn,
} from '@pingtou/ui';
import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { NavLink, Outlet, matchPath, useLocation, type NavLinkProps } from 'react-router-dom';
import { flat } from 'radash';

const LinkButton: React.FC<NavLinkProps> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        buttonVariants({ variant: isActive ? 'secondary' : 'ghost' }),
        'h-8 w-full justify-start gap-2 my-[3px]',
        isActive && 'font-semibold',
      )
    }
  >
    {children}
  </NavLink>
);

type IconComponent = React.ReactElement<{ size: number }>;

export interface NavOption {
  title: React.ReactNode;
  children: {
    title: React.ReactNode;
    icon: IconComponent;
    path: string;
    withTitle?: boolean;
    maxWidth?: number;
  }[];
}

interface SettingProps {
  navs: NavOption[];
  logo: IconComponent;
  title: React.ReactNode;
  name?: React.ReactNode;
  onBack: () => void;
}

export const SettingLayout: React.FC<SettingProps> = (props) => {
  const { navs, logo, name, title, onBack } = props;
  const location = useLocation();
  const matchNav = flat(navs.map((it) => it.children)).find((it) =>
    matchPath(it.path, location.pathname),
  );
  const { withTitle = true, maxWidth = 668 } = matchNav || {};

  return (
    <div className="flex h-full">
      <div className="w-56 py-4 flex flex-col">
        <div className="mx-4 my-2">
          <Button variant="ghost" className="h-8 w-full justify-start gap-2 pl-1" onClick={onBack}>
            <ChevronLeft size={14} className="mr-2" />
            {React.cloneElement(logo, { size: 18 })}
            {title}
          </Button>
        </div>
        <div className="pl-8 pt-6 flex">
          {name ? (
            <div className=" text-base font-semibold">{name}</div>
          ) : (
            <>
              <Avatar className="h-12 w-12">
                <AvatarImage src="/avatar.png" alt="@shadcn" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex-1 ml-3">
                <div className="text-base font-medium truncate pt-0.5">kebai</div>
                <div className="text-sm truncate text-muted-foreground">bijinfeng-fyjgs</div>
              </div>
            </>
          )}
        </div>
        <div className="kb-scrollbar mt-8 px-4 flex-1 space-y-8">
          {navs.map((item, index) => (
            <div key={index}>
              <div className="pl-4 pb-2 text-sm text-muted-foreground">{item.title}</div>
              {item.children.map((child) => (
                <LinkButton key={child.path} to={child.path}>
                  {React.cloneElement(child.icon, { size: 16 })}
                  {child.title}
                </LinkButton>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="flex-1 kb-scrollbar">
        <div className={cn('py-16 max-w-[1080px] mx-auto')}>
          <div style={{ maxWidth }}>
            {withTitle && <div className="pb-7 text-xl bg-background z-10">{matchNav?.title}</div>}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
