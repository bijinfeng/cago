import { Skeleton, Table, TableBody, TableRow, TableCell, cn } from '@pingtou/ui';
import { list } from 'radash'

export const ListSkeleton = () => {
  return (
    <Table>
      <TableBody>
        {list(5).map((it) => (
          <TableRow key={it}>
            <TableCell className='flex items-center gap-2 py-4'>
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className={cn("h-4", it % 2 === 0 ? "w-[250px]" : "w-[350px]")} />
            </TableCell>
            <TableCell className='py-4'>
              <Skeleton className={cn("h-4", it % 2 === 0 ? "w-[150px]" : "w-[250px]")} />
            </TableCell>
            <TableCell className='py-4'>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
