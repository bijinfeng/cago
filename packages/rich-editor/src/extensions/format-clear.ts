import { Extension } from "@tiptap/core"

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    customExtension: {
      formatClear: () => ReturnType
    }
  }
}

export const FormatClear = Extension.create({
  name: "format_clear",
  addCommands() {
    return {
      formatClear:
        () =>
          ({ commands }) =>
            commands.clearNodes() && commands.unsetAllMarks(),
    }
  },
  addKeyboardShortcuts() {
    return {
      "Mod-\\": () => this.editor.commands.formatClear(),
    }
  },
})
