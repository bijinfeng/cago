declare namespace KB {
  interface RegisterUserInfo {
    username: string
    email: string
    password: string
  }

  interface UserInfo {
    blocked: boolean
    confirmed: boolean
    createAt: string
    email: string
    id: number
    provider: string
    updateAt: string
    username: string
  }
}
