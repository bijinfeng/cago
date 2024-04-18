import {
  MARK_BOLD,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks"
import { MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate-font"
import { ColorDropdownMenu } from "./color-dropdown-menu"
import { FontSizeDropdownMenu } from "./font-size-dropdown-menu"
import { HeadingDropdownMenu } from "./heading-dropdown-menu"
import { KEY_UNDO } from "@/lib/plugins/undoPlugin"
import { KEY_REDO } from "@/lib/plugins/redoPlugin"
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button"
import { Icons } from "@/components/common/icons"

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

function FontColor() {
  return (
    <ColorDropdownMenu nodeType={MARK_COLOR} tooltip="Text Color" storageKey="plate-font-color" hasDefault>
      {color => <Icons.fontColor size={16} secondaryColor={color} />}
    </ColorDropdownMenu>
  )
}

function BackgroundColor() {
  return (
    <ColorDropdownMenu nodeType={MARK_BG_COLOR} tooltip="Text Color" storageKey="plate-background-color" hasClear>
      {color => <Icons.bgColor size={16} secondaryColor={color} />}
    </ColorDropdownMenu>
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
  FontSize: FontSizeDropdownMenu,
  FontColor,
  BackgroundColor,
}
