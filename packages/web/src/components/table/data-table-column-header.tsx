import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon } from '@radix-ui/react-icons';
import type { Column } from '@tanstack/react-table';
import { cn } from '@pingtou/ui';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>(props: DataTableColumnHeaderProps<TData, TValue>) {
  const { column, title, className } = props;
  if (!column.getCanSort()) {
    return <div className={className}>{title}</div>;
  }

  const isDesc = column.getIsSorted() === 'desc';
  const isAsc = column.getIsSorted() === 'asc';

  const handleClick = () => {
    if (isDesc) {
      column.toggleSorting(false);
    } else if (isAsc) {
      column.clearSorting();
    } else {
      column.toggleSorting(true);
    }
  };

  return (
    <div className={cn('flex items-center space-x-2 cursor-pointer h-full', className)} onClick={handleClick}>
      <span>{title}</span>
      {isDesc ? (
        <ArrowDownIcon className="h-4 w-4" />
      ) : isAsc ? (
        <ArrowUpIcon className="h-4 w-4" />
      ) : (
        <CaretSortIcon className="h-4 w-4" />
      )}
    </div>
  );
}
