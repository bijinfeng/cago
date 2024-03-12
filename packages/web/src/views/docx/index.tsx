import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@pingtou/ui"
import React from "react"

import Editor from "./editor"
import Sidebar from "./sidebar"

const Docx: React.FC = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        defaultSize={15}
        minSize={10}
        maxSize={20}
      >
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <Editor />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Docx
