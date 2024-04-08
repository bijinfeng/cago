declare namespace KB {
  type BookIconType = "default" | "blog" | "calendly" | "department" | "design" | "group" | "import" | "interest" | "manual" | "notes" | "project" | "reports" | "resource" | "sheet" | "thread" | "topic" | "travel" | "yuque"

  interface BookInfo {
    id: number
    createdAt: string
    description: string
    layout: string
    name: string
    slug: string
    type: BookIconType
    updatedAt: string
    user: KB.UserInfo
    userId: number
  }

  interface TocInfo {
    id: string
    level: number
    parentId: string
    title: string
    type: "DOC" | "FOLDER"
  }
}
