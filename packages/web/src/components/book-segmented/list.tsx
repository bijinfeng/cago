import React from 'react';
import { Table, TableHeader, TableHead, TableBody, TableCell, TableRow } from '@pingtou/ui';
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
import { EmptyTableContent } from '@/components/table/empty-content';
import { mockData } from '@/mock';

export const BookList = () => {
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

  const renderHeader = () => {
    return table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id} colSpan={header.colSpan}>
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ));
  };

  return (
    <Table>
      <TableHeader>{renderHeader()}</TableHeader>
      <TableBody>{table.getRowModel().rows?.length ? renderContent() : <EmptyTableContent />}</TableBody>
    </Table>
  );
};
