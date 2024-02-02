import type { Level } from "@tiptap/extension-heading"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, cn } from "@pingtou/ui"

import { ToggleButton } from "@/components/ToggleButton"
import { useEditorContext } from "@/context"
import { getKeyboardShortcut } from "@/utils/keyboard-shortcuts"

const defaultLevels = [1, 2, 3, 4, 5, 6] as const

interface LevelActionProps {
  key: Level
  label: string
  labelClassName: string
  keyboardShortcut: string
}

const LevelActions: Array<LevelActionProps> = [
  {
    key: 1,
    label: "标题1",
    labelClassName: "text-[28px]",
    keyboardShortcut: getKeyboardShortcut("heading1"),
  },
  {
    key: 2,
    label: "标题2",
    labelClassName: "text-2xl",
    keyboardShortcut: getKeyboardShortcut("heading2"),
  },
  {
    key: 3,
    label: "标题3",
    labelClassName: "text-xl",
    keyboardShortcut: getKeyboardShortcut("heading3"),
  },
  {
    key: 4,
    label: "标题4",
    labelClassName: "text-base",
    keyboardShortcut: getKeyboardShortcut("heading4"),
  },
  {
    key: 5,
    label: "标题5",
    labelClassName: "text-sm",
    keyboardShortcut: getKeyboardShortcut("heading5"),
  },
  {
    key: 6,
    label: "标题6",
    labelClassName: "text-sm",
    keyboardShortcut: getKeyboardShortcut("heading6"),
  },
]

export function HeadingButton() {
  const { editor } = useEditorContext()

  const currentHeadingLevel = defaultLevels.find(level =>
    editor.isActive("heading", { level }),
  )

  const renderItems = () => [
    {
      key: 0,
      label: "正文",
      labelClassName: "text-sm",
      keyboardShortcut: getKeyboardShortcut("normalText"),
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    ...LevelActions.map(item => ({
      ...item,
      onClick: () =>
        editor
          .chain()
          .focus()
          .updateAttributes("textStyle", {
            fontSize: null,
            fontStyle: null,
          })
          .setHeading({ level: item.key })
          .run(),
    })),
  ].map(level => (
    <DropdownMenuItem
      className="flex items-center justify-between"
      onClick={level.onClick}
      key={level.key}
    >
      <span className={cn(level.labelClassName, "font-bold")}>
        {level.label}
      </span>
      <span className="ml-[65px] text-xs text-[#bec0bf]">
        {level.keyboardShortcut}
      </span>
    </DropdownMenuItem>
  ))

  const currentTitle
    = LevelActions.find(it => it.key === currentHeadingLevel)?.label ?? "正文"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ToggleButton withArrowDownIcon tooltip="正文与标题">
          <span className="w-10 text-sm">{currentTitle}</span>
        </ToggleButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {renderItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
