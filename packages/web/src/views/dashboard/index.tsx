import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@pingtou/ui"
import { useLocalStorageState } from "ahooks"
import React from "react"
import Content from "./content"
import Sidebar from "./sidebar"
import { RESIZABLE_PANELS_COLLAPSED, RESIZABLE_PANELS_LAYOUT } from "@/lib/constants"

const DashboardLayout: React.FC = () => {
  const collapsedSize = 4
  const [layout = [33, 67], setLayout] = useLocalStorageState<number[]>(RESIZABLE_PANELS_LAYOUT)
  const [isCollapsed = false, setIsCollapsed] = useLocalStorageState<boolean>(RESIZABLE_PANELS_COLLAPSED)

  return (
    <ResizablePanelGroup direction="horizontal" onLayout={setLayout}>
      <ResizablePanel
        defaultSize={layout[0]}
        collapsedSize={collapsedSize}
        minSize={10}
        maxSize={20}
        collapsible={true}
        onCollapse={() => setIsCollapsed(true)}
        onExpand={() => setIsCollapsed(false)}
      >
        <Sidebar isCollapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={layout[1]} minSize={30}>
        <Content />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default DashboardLayout
