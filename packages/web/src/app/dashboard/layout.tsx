"use client"

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@pingtou/ui"
import { get } from "lodash-es"
import React from "react"

interface DashboardLayoutProps {
  defaultLayout: number[]
  defaultCollapsed?: boolean
  collapsedSize?: number
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ defaultLayout, defaultCollapsed = false, collapsedSize = 4 }) => {
  const [_isCollapsed, setIsCollapsed] = React.useState<boolean>(defaultCollapsed)

  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }

  const onCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed)
    document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
      collapsed,
    )}`
  }

  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal" onLayout={onLayout}>
        <ResizablePanel defaultSize={get(defaultLayout, 0)} collapsedSize={collapsedSize} minSize={15} maxSize={20} collapsible={true} onCollapse={() => onCollapse(true)} onExpand={() => onCollapse(false)}>One</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={get(defaultLayout, 1)} minSize={30}>Two</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default DashboardLayout
