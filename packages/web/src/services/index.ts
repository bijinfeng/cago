import { setCookie } from "cookies-next"
import { api } from "./api"
import { USER_TOKEN } from "@/lib/constants"

export async function login(data: KB.LoginUserInfo) {
  const res = await api.post<KB.LoginResponse>("api/auth/local", data)

  setCookie(USER_TOKEN, res.data.jwt, { maxAge: 3600 * 24 * 30 })
  return res.data.user
}

// 注册用户
export async function register(data: KB.RegisterUserInfo) {
  const res = await api.post<KB.LoginResponse>("/api/auth/local/register", data)
  setCookie(USER_TOKEN, res.data.jwt, { maxAge: 3600 * 24 * 30 })
  return res.data.user
}
