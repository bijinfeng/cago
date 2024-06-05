import { Ellipsis, Trash2, Settings } from 'lucide-react';
import type { Row } from '@tanstack/react-table';
import { Button, Tooltip, TooltipContent, TooltipTrigger } from '@pingtou/ui';
import PinIcon from '@/assets/pin.svg?react';
import { IconButton } from '@/components/icon-button';
import { Dropdown, type MenuProps } from '@/components/dropdown';
import RenameIcon from '@/assets/rename.svg?react';
import PermissionIcon from '@/assets/permission.svg?react';

interface DataTablePinActionsProps<TData> {
  row: Row<TData>;
}

export function DataTablePinActions<TData>({ row }: DataTablePinActionsProps<TData>) {
  console.log(row);

  const items: MenuProps['items'] = [
    {
      key: 'permissions',
      label: '权限',
      icon: <PermissionIcon width={14} height={14} />,
    },
    {
      key: 'rename',
      label: '重命名',
      icon: <RenameIcon width={14} height={14} />,
    },
    {
      key: 'moreSetting',
      label: '更多设置',
      icon: <Settings size={14} />,
    },
    { type: 'divider' },
    {
      key: 'delete',
      label: '删除',
      danger: true,
      icon: <Trash2 size={14} />,
    },
  ];

  return (
    <div className="flex items-center gap-[10px]">
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton className="w-7 h-7">
            <PinIcon width={16} height={16} />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>添加常用</TooltipContent>
      </Tooltip>

      <Dropdown menu={{ items }} align="end">
        <Button variant="ghost" className="flex h-7 w-7 p-0 data-[state=open]:bg-muted">
          <Ellipsis className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </Dropdown>
    </div>
  );
}
