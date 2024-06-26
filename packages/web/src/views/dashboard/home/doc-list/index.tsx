import { Table, TableBody, TableCell, TableRow } from '@pingtou/ui';
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columns } from '@/components/table/columns';
import { mockData } from '@/mock';
import { DataTableFilter } from './data-table-filter';
import { EmptyTableContent } from '@/components/table/empty-content';

function DocList() {
  const table = useReactTable<KB.RecentDataItem>({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const renderContent = () => {
    return table.getRowModel().rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <div className="space-y-4">
      <DataTableFilter table={table} />
      <Table>
        <TableBody>{table.getRowModel().rows?.length ? renderContent() : <EmptyTableContent />}</TableBody>
      </Table>
    </div>
  );
}

export default DocList;
