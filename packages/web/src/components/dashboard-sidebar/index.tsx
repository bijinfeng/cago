import { Separator } from '@pingtou/ui';
import React from 'react';
import { Star, Clock, LibraryBig } from "lucide-react"

import AddDoc from '@/components/add-doc';
import { BookAccordion } from '@/components/book-accordion';
import GlobalSearch from '@/components/global-search';
import { Logo } from '@/components/logo';
import type { IMenuItem } from '@/components/menu';
import Menu from '@/components/menu';
import Notice from '@/components/notice';
import UserNav from '@/components/user-nav';
import { OrganizationPopover } from '@/components/organization-popover';

const pageMenu: IMenuItem[] = [
  {
    label: '开始',
    value: '/dashboard',
    icon: <Clock size={16} />,
  },
  {
    label: '收藏',
    value: '/dashboard/collections',
    icon: <Star size={16} />,
  },
  {
    label: "公共区",
    value: "/dashboard/wiki",
    icon: <LibraryBig size={16} />,
  }
];

interface SidebarProps {
  isCollapsed: boolean;
}

function CollapaedSidebar() {
  const renderSeparator = () => (
    <div className="px-5 w-full">
      <Separator />
    </div>
  );

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
  );
}

function ExpandSidebar() {
  return (
    <div>
      <div className="pt-[10px]">
        <div className="px-3 flex items-center space-x-1">
          <OrganizationPopover />
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

      <BookAccordion />
    </div>
  );
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  return isCollapsed ? <CollapaedSidebar /> : <ExpandSidebar />;
};
