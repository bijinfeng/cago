import { TooltipProvider } from "@pingtou/ui"
import type { Meta } from "@storybook/react"
import { PlateEditor } from "./index"

export function Editor() {
  return (
    <PlateEditor />
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
