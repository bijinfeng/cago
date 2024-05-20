import React from 'react'
import { cn, Button } from "@pingtou/ui"
import { BookIcon } from "@/components/book-icon"
import { Ellipsis } from 'lucide-react';

export const BookGroupItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div {...props} className={cn(props.className, "border p-4 rounded-lg group cursor-pointer")}>
      <div className='flex gap-4'>
        <BookIcon size={24} />

        <div className='flex-1'>
          <div className='truncate text-base font-medium'>项目文档</div>
          <div className='text-xs mt-1 text-muted-foreground'>基于文档的项目协作</div>
        </div>

        <Button size="icon" variant="outline" className='w-8 h-8 invisible group-hover:visible'>
          <Ellipsis size={16} />
        </Button>
      </div>

      <ul className='mt-5 mx-1 space-y-3'>
        <li className='flex items-center text-muted-foreground text-sm'>
          <span className='w-1 h-1 rounded-lg bg-muted-foreground' />
          <span className='flex-1 ml-3'>项目复盘</span>
          <span className='ml-2'>05-11 11:33</span>
        </li>
      </ul>
    </div>
  )
}
