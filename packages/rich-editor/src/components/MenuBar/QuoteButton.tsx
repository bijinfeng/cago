import { ToggleButton } from "@/components/ToggleButton"
import QuoteIcon from "@/components/icon/Quote"
import { useEditorContext } from "@/context"

export function QuoteButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleBlockquote().run()}
      enabled={editor.can().chain().focus().toggleBlockquote().run()}
      actived={editor.isActive("blockquote")}
    >
      <QuoteIcon />
    </ToggleButton>
  )
}
