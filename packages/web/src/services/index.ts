import { api } from "./api"

export function login() {
  return api.get("/api/auth/login")
}

// 注册用户
export function register(data: KB.RegisterUserInfo) {
  return api.post<{ jwt: string, user: KB.UserInfo }>("/api/auth/local/register", data)
}
