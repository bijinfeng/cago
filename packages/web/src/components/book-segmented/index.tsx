import React from 'react';
import {
  cn,
  Tabs,
  TabsList,
  TabsTrigger,
  InputSearch,
  Button,
  Separator,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@pingtou/ui';
import { Plus, LayoutGrid, AlignJustify, ChevronDown } from 'lucide-react';
import { IconButton } from '@/components/icon-button';

import { BookList } from './list';
import { BookGrid } from './grid';

type BookSegmentedProps = React.HTMLAttributes<HTMLDivElement> & {
  widthFilter?: boolean;
};

export const BookSegmented = React.forwardRef<HTMLDivElement, BookSegmentedProps>((props, ref) => {
  const { className, widthFilter } = props;
  const [activeTab, setActiveTab] = React.useState('person');
  const [layout, setLayout] = React.useState('grid');

  return (
    <div className={cn(className)} ref={ref}>
      <div className="flex items-center justify-between">
        {widthFilter ? (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="person">我个人的</TabsTrigger>
              <TabsTrigger value="invite">邀请协作的</TabsTrigger>
            </TabsList>
          </Tabs>
        ) : (
          <div className="text-lg font-medium">知识库</div>
        )}

        <div className="flex items-center gap-3">
          <InputSearch placeholder="搜索知识库" size="sm" />

          {layout === 'list' && (
            <Button variant="outline" size="sm">
              <Plus size={16} />
              <span className="ml-1">新建知识库</span>
            </Button>
          )}

          {layout === 'grid' && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Plus size={16} />
                  <ChevronDown className="ml-1" size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-20">
                <DropdownMenuItem>新建知识库</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>新建分组</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <div className="flex items-center gap-1.5">
            <IconButton
              tooltip="分组视图"
              className="w-[26px] h-[26px]"
              actived={layout === 'grid'}
              onClick={() => setLayout('grid')}
            >
              <LayoutGrid size={16} />
            </IconButton>
            <Separator orientation="vertical" className="h-4" />
            <IconButton
              title="列表视图"
              className="w-[26px] h-[26px]"
              actived={layout === 'list'}
              onClick={() => setLayout('list')}
            >
              <AlignJustify size={16} />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="mt-4">{layout === 'grid' ? <BookGrid /> : <BookList />}</div>
    </div>
  );
});
