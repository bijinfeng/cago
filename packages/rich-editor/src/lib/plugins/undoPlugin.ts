import { createPluginFactory } from "@udecode/plate-common"
import { isHotkey } from "@udecode/plate-core"

export const KEY_UNDO = "undo"

export const createUndoPlugin = createPluginFactory({
  key: KEY_UNDO,
  isElement: false,
  handlers: {
    onKeyDown: (editor, { options: { hotkey } }) => (e) => {
      if (e.defaultPrevented)
        return
      if (!hotkey)
        return

      if (isHotkey(hotkey, e)) {
        e.preventDefault()

        editor.undo()
      }
    },
  },
  options: {
    hotkey: "mod+z",
  },
})
