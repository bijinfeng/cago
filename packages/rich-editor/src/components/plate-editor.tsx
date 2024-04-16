"use client"

import { cn } from "@udecode/cn"
import { CommentsProvider } from "@udecode/plate-comments"
import { Plate, type Value } from "@udecode/plate-common"
import { useRef } from "react"
import type { useDragDropManager } from "react-dnd"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import { Toolbar } from "./toolbar"
import Separator from "@/components/common/separator"
import { CommentsPopover } from "@/components/plate-ui/comments-popover"
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay"
import { Editor } from "@/components/plate-ui/editor"
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar"
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons"
import { MentionCombobox } from "@/components/plate-ui/mention-combobox"
import { commentsUsers, myUserId } from "@/lib/plate/comments"
import { MENTIONABLES } from "@/lib/plate/mentionables"
import { plugins } from "@/lib/plate/plate-plugins"

interface IPlateEditorProps {
  value?: Value
  initialValue?: Value
  dndManager?: ReturnType<typeof useDragDropManager>
  onChange?: (value: Value) => void
}

export const PlateEditor: React.FC<IPlateEditorProps> = (props) => {
  const { dndManager, initialValue, value, onChange } = props
  const containerRef = useRef(null)

  return (
    <DndProvider backend={HTML5Backend} {...(dndManager ? { manager: dndManager } : {})}>
      <CommentsProvider users={commentsUsers} myUserId={myUserId}>
        <Plate
          plugins={plugins}
          initialValue={initialValue}
          value={value}
          onChange={onChange}
        >
          <div ref={containerRef} className={cn()}>

            <div className="flex items-center border-b h-[42px] px-2 gap-2">
              <Toolbar.Undo />
              <Toolbar.Redo />
              <Separator />
              <Toolbar.Heading />
              <Toolbar.FontSize />
              <Toolbar.Bold />
              <Toolbar.Italic />
              <Toolbar.Strikethrough />
              <Toolbar.Underline />
              <Separator />
              <Toolbar.FontColor />
              <Toolbar.BackgroundColor />
            </div>

            <Editor
              className="px-[70px] pt-5 pb-[90px]"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
            />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>

            <MentionCombobox items={MENTIONABLES} />

            <CommentsPopover />

            <CursorOverlay containerRef={containerRef} />
          </div>
        </Plate>
      </CommentsProvider>
    </DndProvider>
  )
}
