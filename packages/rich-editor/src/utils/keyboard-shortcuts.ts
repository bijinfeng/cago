const isMac = navigator.platform.toUpperCase().includes("MAC")

export const keyboardShortcuts = {
  copy: { win: "Ctrl C", mac: "Cmd C" },
  redo: { win: "Ctrl Shift Z", mac: "Cmd Shift Z" },
  normalText: { win: "Ctrl Alt 0", mac: "Cmd Alt 0" },
  heading1: { win: "Ctrl Alt 1", mac: "Cmd Alt 1" },
  heading2: { win: "Ctrl Alt 2", mac: "Cmd Alt 2" },
  heading3: { win: "Ctrl Alt 3", mac: "Cmd Alt 3" },
  heading4: { win: "Ctrl Alt 4", mac: "Cmd Alt 4" },
  heading5: { win: "Ctrl Alt 5", mac: "Cmd Alt 5" },
  heading6: { win: "Ctrl Alt 6", mac: "Cmd Alt 6" },
}

export function getKeyboardShortcut(key: keyof typeof keyboardShortcuts) {
  const target = keyboardShortcuts[key]
  return isMac ? target.mac : target.win
}
