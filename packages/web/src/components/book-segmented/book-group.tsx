import React from 'react';
import { cn, Input, Separator, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@pingtou/ui';
import { IconButton } from '@/components/icon-button';
import { Plus, ChevronUp, ChevronDown, Trash2, SquareMenu } from 'lucide-react';
import { useReactive } from "ahooks";

const AddBookGroup: React.FC<React.ComponentProps<typeof DropdownMenu>> = (props) => {
  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <IconButton className="w-6 h-6">
          <Plus size={16} />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        <DropdownMenuItem>新建知识库</DropdownMenuItem>
        <DropdownMenuItem>添加已有知识库</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>新建分组</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const BookGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...rest } = props;
  const [inputActive, setInputActive] = React.useState(false);

  const state = useReactive({
    isAddOpen: false,
  });

  const showAction = state.isAddOpen;

  return (
    <div {...rest} className="group">
      <div className="flex gap-2 items-center py-2">
        {inputActive ? (
          <Input className="w-44" size="sm" autoFocus onBlur={() => setInputActive(false)} />
        ) : (
          <span
            className="text-sm font-medium hover:border-b hover:border-primary leading-6"
            onClick={() => setInputActive(true)}
          >
            知识库
          </span>
        )}
        <Separator className={cn("flex-1 group-hover:visible", showAction ? "visible" : "invisible")} />
        <button className={cn("h-8 border rounded-md px-1 flex items-center gap-1 group-hover:visible", showAction ? "visible" : "invisible")}>
          <AddBookGroup open={state.isAddOpen} onOpenChange={(open) => state.isAddOpen = open} />
          <IconButton className="w-6 h-6">
            <ChevronUp size={16} />
          </IconButton>
          <IconButton className="w-6 h-6">
            <ChevronDown size={16} />
          </IconButton>
          <IconButton className="w-6 h-6">
            <SquareMenu size={16} />
          </IconButton>
          <IconButton className="w-6 h-6">
            <Trash2 size={16} />
          </IconButton>
        </button>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {children}
      </div>
    </div>
  );
};
