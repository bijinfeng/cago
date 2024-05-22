import React from 'react';
import {
  cn,
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from '@pingtou/ui';
import { BookIcon } from '@/components/book-icon';
import {
  Ellipsis,
  LockKeyhole,
  Pin,
  Trash2,
  SlidersHorizontal,
  Plus,
  TextCursorInput,
  Check,
  EyeOff,
  FolderInput,
} from 'lucide-react';

const docs = ['项目复盘', '缺陷管理', '产品需求文档'];

const ActionButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className={cn('w-8 h-8 group-hover:visible', isOpen ? 'visible' : 'invisible')}
        >
          <Ellipsis size={14} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem className="gap-2">
          <Pin size={14} /> 设为常用
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="gap-2">
            <FolderInput size={14} />
            移动到分组
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-40">
              <DropdownMenuItem className="gap-2">
                <Check size={14} /> 知识库
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <Plus size={14} /> 新建分组
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem className="gap-2">
          <EyeOff size={14} /> 不在分组视图显示
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <LockKeyhole size={14} /> 权限
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <TextCursorInput size={14} /> 重命名
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <SlidersHorizontal size={14} /> 更多设置
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 !text-red-600">
          <Trash2 size={14} /> 删除
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const BookGroupItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={cn(props.className, 'border p-4 rounded-lg group cursor-pointer')}>
      <div className="flex gap-4 mb-5">
        <BookIcon size={24} />

        <div className="flex-1">
          <div className="truncate text-base font-medium flex items-center">
            项目文档
            <LockKeyhole size={13} className="ml-1.5 text-muted-foreground" />
          </div>
          <div className="text-xs mt-1 text-muted-foreground">基于文档的项目协作</div>
        </div>

        <ActionButton />
      </div>

      {docs.length > 0 ? (
        <ul className="mx-1 space-y-3 min-h-20">
          {docs.map((item, index) => (
            <li key={index} className="flex items-center text-muted-foreground text-sm">
              <span className="w-1 h-1 rounded-lg bg-muted-foreground" />
              <span className="flex-1 ml-3">{item}</span>
              <span className="ml-2">05-11 11:33</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="min-h-20 text-muted-foreground text-sm flex items-center justify-center">
          知识库暂无内容
        </div>
      )}
    </div>
  );
};
