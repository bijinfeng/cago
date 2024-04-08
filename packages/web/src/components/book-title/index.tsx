import { Button, Input, Popover, PopoverContent, PopoverTrigger } from "@pingtou/ui"
import React from "react"
import { BookIcon } from "@/components/book-icon"
import { IconButton } from "@/components/icon-button"
import { BOOK_ICON } from "@/lib/constants"

interface Value { icon?: KB.BookIconType, title?: string }

interface IBookTitleProps {
  value?: Value
  onChange?: (value: Value) => void
}

export const BookTitle = React.forwardRef<HTMLDivElement, IBookTitleProps>((props, ref) => {
  const handleTitleChange = (title: string) => {
    props.onChange?.({ ...props.value, title })
  }

  const handleIconChange = (icon: KB.BookIconType) => {
    props.onChange?.({ ...props.value, icon })
  }

  return (
    <div ref={ref} className="flex items-center gap-1.5">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-10 h-10" variant="outline" size="icon">
            <BookIcon size={24} iconType={props.value?.icon} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="start">
          <div className="pl-4 border-b font-bold text-xs leading-8">默认</div>
          <div className="p-4 grid grid-cols-6 gap-2">
            {Object.keys(BOOK_ICON).map(key => (
              <IconButton className="w-8 h-8" key={key} onClick={() => handleIconChange(key as keyof typeof BOOK_ICON)}>
                {React.createElement(BOOK_ICON[key as keyof typeof BOOK_ICON], { width: 24, height: 24 })}
              </IconButton>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Input
        value={props.value?.title}
        className="h-10 w-80"
        placeholder="如：产品文档"
        onChange={e => handleTitleChange(e.target.value)}
      />
    </div>
  )
})
