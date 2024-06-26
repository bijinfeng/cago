import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@pingtou/ui';
import React from 'react';
import BoardTypeIcon from '@/assets/doc-type/board.svg?react';
import DocTypeIcon from '@/assets/doc-type/default.svg?react';
import SheetTypeIcon from '@/assets/doc-type/sheet.svg?react';
import TableTypeIcon from '@/assets/doc-type/table.svg?react';
import ImportIcon from '@/assets/import.svg?react';
import TemplateIcon from '@/assets/template.svg?react';
import { Plus } from 'lucide-react';
import { formEvent } from '@/components/form-dialog/events';
import { BookIcon } from '@/components/book-icon';

interface IAddDocProps {
  children?: React.ReactNode;
  isCollapsed?: boolean;
}

export const AddDoc: React.FC<IAddDocProps> = ({ isCollapsed }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-8 h-8">
          <Plus size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" side={isCollapsed ? 'right' : 'bottom'}>
        <DropdownMenuItem className="flex items-center h-9">
          <DocTypeIcon width={18} height={18} className="mr-3" />
          <span>新建文档</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center h-9">
          <SheetTypeIcon width={18} height={18} className="mr-3" />
          <span>新建表格</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center h-9">
          <BoardTypeIcon width={18} height={18} className="mr-3" />
          <span>新建画板</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center h-9">
          <TableTypeIcon width={18} height={18} className="mr-3" />
          <span>新建数据表</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center h-9"
          onClick={() => formEvent.emit('create-book-stack')}
        >
          <BookIcon size={18} className="mr-3" />
          <span>知识库</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center h-9"
          onClick={() => formEvent.emit('create-team')}
        >
          <BookIcon iconType="group" size={18} className="mr-3" />
          <span>团队</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center h-9">
          <TemplateIcon width={18} height={18} className="mr-3" />
          <span>从模板新建</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center h-9">
          <ImportIcon width={18} height={18} className="mr-3" />
          <span>导入...</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddDoc;
