import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@pingtou/ui"
import React from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "./sidebar"

const BlogLayout: React.FC = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={15}
        minSize={10}
        maxSize={20}
        className="dark:bg-muted/40"
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <Outlet />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default BlogLayout
