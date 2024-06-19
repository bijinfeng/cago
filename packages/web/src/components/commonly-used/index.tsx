import React from 'react';
import { BookIcon } from '@/components/book-icon';
import { LockKeyhole, Ellipsis, GripVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { IconButton } from '@/components/icon-button';
import { cn } from '@pingtou/ui';

export const CommonlyUsed: React.FC = () => {
  const [expand, setExpand] = React.useState(true);

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md">
      <div className={cn('text-sm flex items-center justify-between', { 'mb-2.5': expand })}>
        常用
        <IconButton
          className="w-auto h-auto px-1.5 hover:bg-gray-200"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <>
              收起
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              展开
              <ChevronDown size={16} />
            </>
          )}
        </IconButton>
      </div>

      <div className={cn('grid grid-cols-3 gap-x-2 gap-y-4', { hidden: !expand })}>
        <div className="border border-gray-200 hover:border-gray-300 py-2 bg-white min-h-16 rounded-md cursor-pointer group flex items-center">
          <IconButton className="h-5 w-[18px] invisible group-hover:visible cursor-grab">
            <GripVertical size={16} />
          </IconButton>

          <div className="flex items-center flex-1 mr-2">
            <BookIcon size={24} />
            <div className="ml-2">
              <div className="flex items-center">
                <span className="mr-1 text-sm font-medium leading-6">Javascript</span>
                <LockKeyhole size={14} />
              </div>
              <div className="text-xs leading-5 text-muted-foreground">记录生活</div>
            </div>
          </div>

          <IconButton className="w-7 h-7 mr-4 invisible group-hover:visible">
            <Ellipsis size={16} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
