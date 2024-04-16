import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks"
import { HeadingDropdownMenu } from "./heading-dropdown-menu"
import { Icons } from "@/components/common/icons"
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button"
import { KEY_REDO } from "@/lib/plugins/redoPlugin"
import { KEY_UNDO } from "@/lib/plugins/undoPlugin"

function Undo() {
  return (
    <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={KEY_UNDO}>
      <Icons.undo size={16} />
    </MarkToolbarButton>
  )
}

function Redo() {
  return (
    <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={KEY_REDO}>
      <Icons.redo size={16} />
    </MarkToolbarButton>
  )
}

function Bold() {
  return (
    <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
      <Icons.bold size={16} />
    </MarkToolbarButton>
  )
}

function Italic() {
  return (
    <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
      <Icons.italic size={16} />
    </MarkToolbarButton>
  )
}

function Underline() {
  return (
    <MarkToolbarButton tooltip="Underline (⌘+U)" nodeType={MARK_UNDERLINE}>
      <Icons.underline size={16} />
    </MarkToolbarButton>
  )
}

function Strikethrough() {
  return (
    <MarkToolbarButton tooltip="Underline (⌘+U)" nodeType={MARK_STRIKETHROUGH}>
      <Icons.strikethrough size={16} />
    </MarkToolbarButton>
  )
}

export const Toolbar = {
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading: HeadingDropdownMenu,
}
