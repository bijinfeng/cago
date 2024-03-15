declare namespace KB {
  interface BookInfo {
    id: number
    createdAt: string
    description: string
    layout: string
    name: string
    slug: string
    type: string
    updatedAt: string
    user: KB.UserInfo
    userId: number
  }
}
