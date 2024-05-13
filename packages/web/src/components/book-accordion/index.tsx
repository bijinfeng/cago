import { buttonVariants, cn } from '@pingtou/ui';
import { ChevronRight, Ellipsis, GripVertical } from 'lucide-react';
import React from 'react';
import { IconButton } from '@/components/icon-button';
import { BookIcon } from '@/components/book-icon';
import ArrowDownIcon from '@/assets/review-arrow-down.svg?react';
import { type NodeRendererProps, Tree } from 'react-arborist';
import { useDragDropManager } from 'react-dnd';
import { useSize } from 'ahooks';

interface INodeData {
  id: string;
  name: string;
  children?: INodeData[];
}

const data: INodeData[] = [
  {
    id: '3',
    name: '知识库',
    children: [
      { id: 'c1', name: '面试' },
      { id: 'c2', name: 'Javascript' },
      { id: 'c3', name: '个人博客' },
    ],
  },
];

function RenderNode({ node, dragHandle }: NodeRendererProps<INodeData>) {
  if (node.isLeaf) {
    return (
      <div className={cn(buttonVariants({ variant: 'ghost' }), 'flex px-1 py-0 h-8 group')}>
        <div
          ref={dragHandle}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'w-5 h-6 p-0 cursor-pointer hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible',
          )}
        >
          <GripVertical size={16} />
        </div>
        <div className="flex-1 flex items-center">
          <BookIcon size={18} />
          <span className="ml-1.5">{node.data.name}</span>
        </div>
        <IconButton className={cn('w-5 h-6 hover:bg-gray-200 transition-all mx-0.5 invisible group-hover:visible')}>
          <Ellipsis size={16} />
        </IconButton>
      </div>
    );
  }

  return (
    <div className={cn(buttonVariants({ variant: 'secondary' }), 'flex px-1 py-0 h-8')}>
      <IconButton
        className={cn('w-6 h-6 hover:bg-gray-200')}
        onClick={(e) => {
          e.stopPropagation();
          node.toggle();
        }}
      >
        <ArrowDownIcon width={20} height={20} className={cn('transition-all', { '-rotate-90': !node.isOpen })} />
      </IconButton>
      <span className="flex-1 ml-1.5">{node.data.name}</span>
      <ChevronRight size={16} className="mr-1.5" />
    </div>
  );
}

export const BookAccordion: React.FC = () => {
  const dndManager = useDragDropManager();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const size = useSize(containerRef);

  return (
    <div ref={containerRef} className="m-4 flex-1 overflow-hidden">
      {size?.height && (
        <Tree
          initialData={data}
          indent={0}
          className="kb-scrollbar"
          rowHeight={38}
          width="100%"
          height={size.height}
          dndManager={dndManager}
          rowClassName="py-[3px]"
        >
          {RenderNode}
        </Tree>
      )}
    </div>
  );
};
