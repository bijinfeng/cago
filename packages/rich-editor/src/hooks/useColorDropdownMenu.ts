import {
  focusEditor,
  getMark,
  removeMark,
  select,
  setMarks,
  useEditorRef,
  useEditorSelector,
} from "@udecode/plate-common"
import React from "react"
import { useLocalStorage } from "react-use"

export function useColorDropdownMenuState({
  nodeType,
  closeOnSelect = true,
  storageKey,
}: {
  nodeType: string
  storageKey: string
  closeOnSelect?: boolean
}) {
  const editor = useEditorRef()
  const selectionDefined = useEditorSelector(editor => !!editor.selection, [])
  const color = useEditorSelector(editor => getMark(editor, nodeType) as string, [nodeType])
  const [selectedColor, setSelectedColor] = useLocalStorage<string>(storageKey)
  const [open, setOpen] = React.useState(false)

  const onToggle = React.useCallback(
    (value = !open) => {
      setOpen(value)
    },
    [open, setOpen],
  )

  const updateColor = React.useCallback(
    (value: string, focus = false) => {
      if (editor.selection) {
        setSelectedColor(value)

        select(editor, editor.selection)
        focus && focusEditor(editor)

        setMarks(editor, { [nodeType]: value })
      }
    },
    [editor, nodeType],
  )

  const updateColorAndClose = React.useCallback(
    (value: string) => {
      updateColor(value, true)
      closeOnSelect && onToggle()
    },
    [closeOnSelect, onToggle, updateColor],
  )

  const clearColor = React.useCallback(() => {
    if (editor.selection) {
      select(editor, editor.selection)
      focusEditor(editor)

      if (selectedColor)
        removeMark(editor, { key: nodeType })

      closeOnSelect && onToggle()
    }
  }, [editor, selectedColor, closeOnSelect, onToggle, nodeType])

  React.useEffect(() => {
    if (selectionDefined)
      setSelectedColor(color)
  }, [color, selectionDefined])

  return {
    open,
    onToggle,
    selectedColor,
    color,
    updateColorAndClose,
    updateColor,
    clearColor,
  }
}
