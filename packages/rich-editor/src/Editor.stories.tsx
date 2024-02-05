import { TooltipProvider } from "@pingtou/ui"
import type { Meta } from "@storybook/react"
import { EditorConfig, EditorContent, MenuBar } from "./index"

export function Editor() {
  return (
    <EditorConfig>
      <div style={{ borderBottom: "1px solid #e4e9ec", height: 42 }}>
        <MenuBar />
      </div>
      <EditorContent />
    </EditorConfig>
  )
}

const meta: Meta = {
  title: "Editor",
  decorators: [
    Story => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
