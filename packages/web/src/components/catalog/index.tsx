import { cn } from "@pingtou/ui"
import { useSize } from "ahooks"
import React, { useRef, useState } from "react"
import { type NodeRendererProps, Tree } from "react-arborist"
import { useDragDropManager } from "react-dnd"
import { AddAction } from "./add-action"
import { MoreAction } from "./more-action"
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
      { id: "c3", name: "Open Source Projects Open Source Projects Open Source Projects" },
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

function RenderNode({ node, style, dragHandle }: NodeRendererProps<INodeData>) {
  const [addOpen, setAddOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const renderIcon = () => {
    if (node.isLeaf)
      return <span className="w-6 h-6 mr-1" />

    return (
      <IconButton className="w-6 h-6 mr-1">
        <ArrowDownIcon
          width={16}
          height={16}
          className={cn("text-muted-foreground transition-all", { "-rotate-90": !node.isOpen })}
        />
      </IconButton>
    )
  }

  const isOpen = addOpen || moreOpen

  return (
    <div
      style={style}
      ref={dragHandle}
      className="group flex h-9 items-center hover:bg-accent cursor-pointer rounded-md pr-1.5"
      onClick={(e) => {
        e.stopPropagation()
        node.toggle()
      }}
    >
      {renderIcon()}
      <span className="ml-1 text-sm flex-1 truncate">{node.data.name}</span>
      <MoreAction open={addOpen} className={cn("mr-1 group-hover:flex", { hidden: !isOpen })} onOpenChange={setAddOpen} />
      <AddAction open={moreOpen} onOpenChange={setMoreOpen} className={cn("group-hover:flex", { hidden: !isOpen })} />
    </div>
  )
}

export const Catalog: React.FC = () => {
  const dndManager = useDragDropManager()
  const ref = useRef(null)
  const size = useSize(ref)

  return (
    <div ref={ref} className="flex-1 overflow-hidden">
      {size?.height && (
        <Tree
          initialData={data}
          className="kb-scrollbar"
          rowHeight={36}
          rowClassName="px-2"
          width="100%"
          height={size?.height}
          dndManager={dndManager}
        >
          {RenderNode}
        </Tree>
      )}
    </div>
  )
}
