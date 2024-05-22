import React, { forwardRef } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@pingtou/ui';
import { BookIcon } from '@/components/book-icon';
import { IconButton } from '@/components/icon-button';
import { BOOK_ICON } from '@/lib/constants';

interface IBookIconPopoverProps {
  value?: KB.BookIconType;
  onChange?: (value: KB.BookIconType) => void;
  size?: 'default' | 'large';
}

export const BookIconPopover = forwardRef<HTMLButtonElement, IBookIconPopoverProps>(
  ({ value, onChange, size = 'default' }, ref) => {
    const buttonSize = size === 'large' ? 56 : 40;
    const iconSize = size === 'large' ? 38 : 24;

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            style={{ width: buttonSize, height: buttonSize }}
            variant="outline"
            size="icon"
          >
            <BookIcon size={iconSize} iconType={value} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="start">
          <div className="pl-4 border-b font-bold text-xs leading-8">默认</div>
          <div className="p-4 grid grid-cols-6 gap-2">
            {Object.keys(BOOK_ICON).map((key) => (
              <IconButton
                className="w-8 h-8"
                key={key}
                onClick={() => onChange?.(key as keyof typeof BOOK_ICON)}
              >
                {React.createElement(BOOK_ICON[key as keyof typeof BOOK_ICON], {
                  width: 24,
                  height: 24,
                })}
              </IconButton>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);
