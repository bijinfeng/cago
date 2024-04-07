import { cn } from "@pingtou/ui"
import React from "react"
import { type NodeRendererProps, Tree } from "react-arborist"
import { useDragDropManager } from "react-dnd"
import { formatDate } from "@/lib/utils"
import { IconButton } from "@/components/icon-button"
import ArrowDownIcon from "@/assets/arrow-down.svg?react"

interface INodeData {
  id: string
  name: string
  children?: INodeData[]
}

const data: INodeData[] = [
  { id: "1", name: "Unread" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      { id: "c1", name: "General" },
      { id: "c2", name: "Random" },
      { id: "c3", name: "Open Source Projects" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
]

function renderNode({ node, style, dragHandle }: NodeRendererProps<INodeData>) {
  return (
    <div
      style={style}
      ref={dragHandle}
      className="flex items-center mx-2 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation()
        node.toggle()
      }}
    >
      {!node.isLeaf && (
        <IconButton className="w-6 h-6 mr-1">
          <ArrowDownIcon width={16} height={16} className={cn("text-muted-foreground transition-all", { "-rotate-90": !node.isOpen })} />
        </IconButton>
      )}
      <div className="truncate leading-9">{node.data.name}</div>
      {node.isLeaf && (
        <>
          <span className="flex-1 border-t border-dashed mx-4 border-muted-foreground" />
          <span className="text-muted-foreground text-sm">{formatDate(Date.now())}</span>
        </>
      )}
    </div>
  )
}

export const List: React.FC = () => {
  const dndManager = useDragDropManager()

  return (
    <Tree
      initialData={data}
      indent={24}
      rowHeight={36}
      width="100%"
      disableDrag
      dndManager={dndManager}
    >
      {renderNode}
    </Tree>
  )
}
