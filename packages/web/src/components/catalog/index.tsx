import { cn } from "@pingtou/ui"
import { useSize } from "ahooks"
import React, { useRef } from "react"
import type { NodeRendererProps } from "react-arborist"
import { Tree } from "react-arborist"
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

function renderNode({ node, style, dragHandle }: NodeRendererProps<INodeData>) {
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
      {node.isLeaf
        ? (<span className="w-6 h-6 mr-1" />)
        : (
          <IconButton className="w-6 h-6 mr-1">
            <ArrowDownIcon width={16} height={16} className={cn("text-muted-foreground transition-all", { "-rotate-90": !node.isOpen })} />
          </IconButton>
          )}
      <span className="ml-1 text-sm flex-1 truncate">{node.data.name}</span>
      <MoreAction className="mr-1 hidden group-hover:flex" />
      <AddAction className="hidden group-hover:flex" />
    </div>
  )
}

export const Catalog: React.FC = () => {
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
        >
          {renderNode}
        </Tree>
      )}
    </div>
  )
}
