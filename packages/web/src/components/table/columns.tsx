import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@pingtou/ui';
import type { ColumnDef } from '@tanstack/react-table';
import { LuPencil } from 'react-icons/lu';
import { Link } from 'react-router-dom';
// import { DataTableRowActions } from './data-table-row-actions';
import { DataTablePinActions } from './data-table-pin-actions';
import { formatDate } from '@/lib/utils';
import { BookIcon } from '@/components/book-icon';
import { DataTableColumnHeader } from './data-table-column-header';

export const bookTitleColumn: ColumnDef<KB.RecentDataItem> = {
  accessorKey: 'title',
  header: ({ column }) => <DataTableColumnHeader column={column} title="名称" />,
  cell: ({ row }) => (
    <div className="flex items-center group">
      <BookIcon width={24} height={24} className="mr-4" />
      <Link to="/" className="leading-6">
        {row.getValue('title')}
      </Link>
      <Link to="/" className="ml-3 invisible group-hover:visible inline-flex">
        <Tooltip>
          <TooltipTrigger>
            <LuPencil size={16} />
          </TooltipTrigger>
          <TooltipContent>编辑</TooltipContent>
        </Tooltip>
      </Link>
    </div>
  ),
};

export const ascriptionColumn: ColumnDef<KB.RecentDataItem> = {
  accessorKey: 'ascription',
  header: ({ column }) => <DataTableColumnHeader column={column} title="归属" />,
  cell: () => <div>kebai</div>,
};

export const updatedColumn: ColumnDef<KB.RecentDataItem> = {
  accessorKey: 'updatedAt',
  header: ({ column }) => <DataTableColumnHeader column={column} title="更新时间" />,
  cell: ({ row }) => <div>{formatDate(row.getValue('updatedAt'))}</div>,
};

export const pinAction: ColumnDef<KB.RecentDataItem> = {
  id: 'actions',
  cell: ({ row }) => <DataTablePinActions row={row} />,
};

export const columns: ColumnDef<KB.RecentDataItem>[] = [
  bookTitleColumn,
  {
    accessorKey: 'book',
    cell: ({ row }) => {
      const user = row.original.user;
      const book = row.getValue<KB.BookInfo>('book');

      return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">{user.username}</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator> / </BreadcrumbSeparator>
            <BreadcrumbItem>
              <Link to="/">{book.name}</Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
    },
  },
  updatedColumn,
  pinAction,
];
