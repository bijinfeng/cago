import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  InputSearch,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@pingtou/ui';
import { useToggle } from 'react-use';

import { ChevronRight } from 'lucide-react';
import { ToolbarButton } from '@/components/common/toolbar-button';
import ImageIcon from '@/components/icon/Image';
import TableIcon from '@/components/icon/Table';
import AttachmentIcon from '@/components/icon/Attachment';
import StatusIcon from '@/components/icon/Status';
import DrawingBoardIcon from '@/components/icon/DrawingBoard';
import InsertCardIcon from '@/components/icon/InsertCard';

export function InsertDropdownMenu() {
  const [on, toggle] = useToggle(true);

  return (
    <Popover modal={false} open={on} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <ToolbarButton pressed={on} className="p-1">
          <InsertCardIcon width={18} height={18} className="text-primary" />
        </ToolbarButton>
      </PopoverTrigger>

      <PopoverContent align="start" className="px-0">
        <div className="px-4">
          <InputSearch placeholder="请输入搜索内容" size="sm" />
        </div>
        <div className="mt-3 text-xs leading-5 text-muted-foreground mb-1 px-4">基础</div>
        <div className="grid grid-cols-2 px-[10px]">
          <div className="p-[6px] flex items-center mb-1 cursor-pointer rounded hover:bg-muted">
            <ImageIcon width={36} height={36} />
            <span className="text-sm ml-2">图片</span>
          </div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="p-[6px] flex items-center mb-1 cursor-pointer rounded hover:bg-muted">
                <TableIcon width={36} height={36} />
                <span className="text-sm ml-2 flex-1">表格</span>
                <ChevronRight size={16} />
              </div>
            </HoverCardTrigger>
            <HoverCardContent align="start" side="right" className="py-3">
              xxx
            </HoverCardContent>
          </HoverCard>
          <div className="p-[6px] flex items-center mb-1 cursor-pointer rounded hover:bg-muted">
            <AttachmentIcon width={36} height={36} />
            <span className="text-sm ml-2">附件</span>
          </div>
          <div className="p-[6px] flex items-center mb-1 cursor-pointer rounded hover:bg-muted">
            <StatusIcon width={36} height={36} />
            <span className="text-sm ml-2">状态</span>
          </div>
        </div>
        <div className="mt-3 text-xs leading-5 text-muted-foreground mb-1 px-4">画板类</div>
        <div className="px-[10px]">
          <div className="p-[6px] flex items-center mb-1 cursor-pointer relative rounded hover:bg-muted">
            <DrawingBoardIcon width={36} height={36} />
            <div className="ml-2">
              <p className="text-sm leading-[18px]">画板</p>
              <div className="text-sm leading-[18px] text-muted-foreground">
                可插入图形、连线和图片等
              </div>
            </div>

            <div className="text-xs leading-[18px] text-muted-foreground absolute top-[6px] right-[6px]">
              /hb
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
