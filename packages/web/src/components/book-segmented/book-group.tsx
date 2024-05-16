import React from 'react';
import { Input, Separator } from '@pingtou/ui';
import { IconButton } from '@/components/icon-button';
import { Plus, ChevronUp, ChevronDown, Trash2, SquareMenu } from 'lucide-react';

export const BookGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, ...rest } = props;
  const [inputActive, setInputActive] = React.useState(false);

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
        <Separator className="flex-1 invisible group-hover:visible" />
        <button className="h-8 border rounded-md px-1 flex items-center gap-1 invisible group-hover:visible">
          <IconButton className="w-6 h-6">
            <Plus size={16} />
          </IconButton>
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

      {children}
    </div>
  );
};
