import { Skeleton } from '@pingtou/ui';
import React from 'react';
import { type NodeRendererProps, Tree } from 'react-arborist';
import { useDragDropManager } from 'react-dnd';
import { useSize } from 'ahooks';

import { GroupTitle } from './group-title';
import { GroupLeaf } from './group-leaf';

type SkeletonNode = { id: string; type: 'skeleton' };

interface INodeData {
  id: string;
  name: string;
  link: string;
  children?: Array<INodeData | SkeletonNode>;
}

const isSkeleton = (node: INodeData | SkeletonNode): node is SkeletonNode => {
  return (node as SkeletonNode).type === 'skeleton';
};

export const DEFAULT_DATA: INodeData[] = [
  {
    id: '1',
    name: '知识库',
    link: '/dashboard/books',
    children: [
      { id: '11', type: 'skeleton' },
      { id: '12', type: 'skeleton' },
      { id: '13', type: 'skeleton' },
    ],
  },
  {
    id: '2',
    name: '团队',
    link: '/dashboard/groups',
    children: [
      { id: '21', type: 'skeleton' },
      { id: '22', type: 'skeleton' },
      { id: '23', type: 'skeleton' },
    ],
  },
];

function RenderNode({ node, dragHandle }: NodeRendererProps<INodeData>) {
  if (isSkeleton(node.data)) {
    return <Skeleton className="h-4 my-2 w-9/12 mx-auto" />;
  }

  if (node.isLeaf) {
    return <GroupLeaf link={node.data.link} name={node.data.name} dragHandleRef={dragHandle} />;
  }

  return (
    <GroupTitle
      link={node.data.link}
      isOpen={node.isOpen}
      name={node.data.name}
      onToggle={node.toggle}
    />
  );
}

interface BookAccordionProps {
  data?: INodeData[];
}

export const BookAccordion: React.FC<BookAccordionProps> = (props) => {
  const { data = DEFAULT_DATA } = props;
  const dndManager = useDragDropManager();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const size = useSize(containerRef);

  return (
    <div ref={containerRef} className="my-4 flex-1 overflow-hidden">
      {size?.height && (
        <Tree
          initialData={data}
          indent={0}
          className="kb-scrollbar"
          rowHeight={38}
          width="100%"
          height={size.height}
          dndManager={dndManager}
          rowClassName="py-[3px] px-3"
        >
          {RenderNode}
        </Tree>
      )}
    </div>
  );
};
