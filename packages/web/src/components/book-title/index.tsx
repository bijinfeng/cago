import { Input } from '@pingtou/ui';
import React from 'react';

import { BookIconPopover } from '@/components/book-icon-popover';

interface Value {
  icon?: KB.BookIconType;
  title?: string;
}

interface IBookTitleProps {
  value?: Value;
  onChange?: (value: Value) => void;
}

export const BookTitle = React.forwardRef<HTMLDivElement, IBookTitleProps>((props, ref) => {
  const handleTitleChange = (title: string) => {
    props.onChange?.({ ...props.value, title });
  };

  const handleIconChange = (icon: KB.BookIconType) => {
    props.onChange?.({ ...props.value, icon });
  };

  return (
    <div ref={ref} className="flex items-center gap-1.5">
      <BookIconPopover value={props.value?.icon} onChange={handleIconChange} />
      <Input
        value={props.value?.title}
        className="h-10 w-80"
        placeholder="如：产品文档"
        onChange={(e) => handleTitleChange(e.target.value)}
      />
    </div>
  );
});
