import React from 'react';
import { Popover, PopoverContent, PopoverTrigger, Separator } from '@pingtou/ui';
import { MenuButton } from '@/components/menu';
import { CircleEllipsis, Trash2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MoreAction: React.FC = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <MenuButton>
          <CircleEllipsis size={16} />
          <span>更多</span>
        </MenuButton>
      </PopoverTrigger>

      <PopoverContent className="p-2 w-60" side="right">
        <div className="text-sm px-[18px] font-semibold leading-10">更多</div>

        <Link to="/dashboard/recycles">
          <MenuButton className="h-auto px-[14px] py-2">
            <div className="p-2">
              <Trash2 size={16} />
            </div>

            <div className="text-left text-xs ml-4">
              <div className="leading-[18px] font-medium">回收站</div>
              <div className="leading-5 font-normal">找回删除的文档与内容</div>
            </div>
          </MenuButton>
        </Link>

        <MenuButton className="h-auto px-[14px] py-2">
          <div className="p-2">
            <Monitor size={16} />
          </div>

          <div className="text-left text-xs ml-4">
            <div className="leading-[18px] font-medium">客户端下载</div>
            <div className="leading-5 font-normal">使用移动端、桌面端、插件</div>
          </div>
        </MenuButton>

        <Separator className="my-[10px]" />

        <MenuButton className="h-9">帮助</MenuButton>
        <MenuButton className="h-9">我要反馈</MenuButton>
      </PopoverContent>
    </Popover>
  );
};
