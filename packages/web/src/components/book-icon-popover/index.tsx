import React, { forwardRef, useState } from 'react';
import { Button, Popover, PopoverContent, PopoverTrigger, cn } from '@pingtou/ui';
import { BookIcon } from '@/components/book-icon';
import { IconButton } from '@/components/icon-button';
import { BOOK_ICON } from '@/lib/constants';

import { UploadIcon } from './upload-icon';

interface IBookIconPopoverProps {
  value?: KB.BookIconType;
  onChange?: (value: KB.BookIconType) => void;
  size?: 'default' | 'large';
}

export const BookIconPopover = forwardRef<HTMLButtonElement, IBookIconPopoverProps>(
  ({ value, onChange, size = 'default' }, ref) => {
    const [tabType, setTabType] = useState<'icon' | 'custom'>('icon');

    const buttonSize = size === 'large' ? 56 : 40;
    const iconSize = size === 'large' ? 38 : 24;

    const renderTab = (label: string, value: typeof tabType) => {
      const isActive = tabType === value;

      return (
        <span
          className={cn('relative cursor-pointer', {
            'after:absolute after:h-0.5 after:bg-foreground after:w-full after:left-0 after:bottom-0 after:rounded-[1px]':
              isActive,
            'font-medium': isActive,
          })}
          onClick={() => setTabType(value)}
        >
          {label}
        </span>
      );
    };

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
        <PopoverContent className="p-0 w-80" align="start">
          <div className="pl-4 border-b text-sm leading-10 h-10 flex items-center gap-4">
            {renderTab('图标', 'icon')}
            {renderTab('自定义', 'custom')}
          </div>

          <div className="p-4 h-36">
            {tabType === 'custom' && <UploadIcon />}
            {tabType === 'icon' && (
              <div className="grid grid-cols-6 gap-2">
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
            )}
          </div>
        </PopoverContent>
      </Popover>
    );
  },
);
