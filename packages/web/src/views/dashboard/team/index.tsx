import React from 'react';
import { IconButton } from '@/components/icon-button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@pingtou/ui';
import { Settings, BarChart4, Trash2, LockKeyhole, Shield, CircleEllipsis, ArrowUpDown, Star } from 'lucide-react';
import { BookIcon } from '@/components/book-icon';
import { Link, Outlet } from 'react-router-dom';

export const DashboardTeam: React.FC = () => {
  return (
    <div>
      <div className="border-b h-[60px] px-9 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <BookIcon iconType="group" size={24} />
            <h3 className="text-lg font-semibold ml-3">kebai</h3>
          </div>
          <LockKeyhole size={14} />
          <Star size={14} />
        </div>

        <div className="flex flex-1 ml-9 gap-8 text-sm">
          <Link to="/dashboard/team">知识库</Link>
          <Link to="/dashboard/team/activities">动态</Link>
          <Link to="/dashboard/team/thread">话题</Link>
          <Link to="/dashboard/team/members">成员</Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconButton className="w-7 h-7">
              <Settings size={16} />
            </IconButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="gap-2">
              <BarChart4 size={16} />
              统计
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Trash2 size={16} />
              回收站
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <LockKeyhole size={16} />
              权限
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Shield size={16} />
              安全日志
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <CircleEllipsis size={16} />
              更多设置
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="gap-2">
              <ArrowUpDown size={16} />
              编辑导航
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Outlet />
    </div>
  );
};
