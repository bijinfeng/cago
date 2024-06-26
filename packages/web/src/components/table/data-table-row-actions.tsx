'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import type { Row } from '@tanstack/react-table';

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@pingtou/ui';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  console.log(row);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>收藏</DropdownMenuItem>
        <DropdownMenuItem>移除记录</DropdownMenuItem>
        <DropdownMenuItem>浏览器打开</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
