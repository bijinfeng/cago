import { Separator } from '@pingtou/ui';
import React from 'react';
import { Star, Clock, LibraryBig, Settings, Earth } from 'lucide-react';

import AddDoc from '@/components/add-doc';
import { BookAccordion } from '@/components/book-accordion';
import GlobalSearch from '@/components/global-search';
import type { IMenuItem } from '@/components/menu';
import Menu from '@/components/menu';
import Notice from '@/components/notice';
import UserNav from '@/components/user-nav';
import { OrganizationPopover } from '@/components/organization-popover';
import { useGloablStore } from "@/store/global";

import { MoreAction } from './more-action';

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
    label: '公共区',
    value: '/dashboard/wiki',
    icon: <LibraryBig size={16} />,
  },
];

const bottomPageMenu: IMenuItem[] = [
  {
    label: '空间管理',
    value: '/organizations/dashboard',
    icon: <Settings size={16} />,
  },
  {
    label: '空间公开页',
    value: '/organizations/wiki',
    icon: <Earth size={16} />,
  },
];

interface SidebarProps {
  isCollapsed: boolean;
}

function CollapaedSidebar() {
  const separator = (
    <div className="px-5 w-full">
      <Separator />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-2 h-full py-3">
      <OrganizationPopover isCollapsed className="mb-[10px]" />
      <AddDoc isCollapsed />
      <Notice />
      <GlobalSearch isCollapsed />
      {separator}
      <Menu items={pageMenu} isCollapsed />
      {separator}

      <div className="flex-1" />
      <UserNav isCollapsed />
      <Menu items={bottomPageMenu} isCollapsed>
        <MoreAction isCollapsed />
      </Menu>
    </div>
  );
}

function ExpandSidebar() {
  return (
    <div className="flex flex-col h-full">
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

      <Menu className="px-3 py-3" items={bottomPageMenu}>
        <MoreAction />
      </Menu>
    </div>
  );
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed }) => {
  const { commonUsed } = useGloablStore();

  console.log(commonUsed);

  return isCollapsed ? <CollapaedSidebar /> : <ExpandSidebar />;
};
