import { ToggleButton } from "@/components/ToggleButton"
import TaskListIcon from "@/components/icon/TaskList"
import { useEditorContext } from "@/context"

export function TaskListButton() {
  const { editor } = useEditorContext()

  return (
    <ToggleButton
      onClick={() => editor.chain().focus().toggleTaskList().run()}
      enabled={editor.can().chain().focus().toggleTaskList().run()}
      actived={editor.isActive("taskList")}
    >
      <TaskListIcon />
    </ToggleButton>
  )
}
