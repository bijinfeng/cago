import { createPluginFactory } from "@udecode/plate-common"
import { isHotkey } from "@udecode/plate-core"

export const KEY_REDO = "redo"

export const createRedoPlugin = createPluginFactory({
  key: KEY_REDO,
  handlers: {
    onKeyDown: (editor, { options: { hotkey } }) => (e) => {
      if (e.defaultPrevented)
        return
      if (!hotkey)
        return

      if (isHotkey(hotkey, e)) {
        e.preventDefault()

        editor.redo()
      }
    },
  },
  options: {
    hotkey: "cmd+shift+z",
  },
})
