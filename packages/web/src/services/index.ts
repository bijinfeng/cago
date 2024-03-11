import { api } from "./api"
import { USER_TOKEN } from "@/lib/constants"

export async function login(data: KB.LoginUserInfo) {
  const res = await api.post<KB.LoginResponse>("api/auth/local", data)

  localStorage.setItem(USER_TOKEN, res.data.jwt)
  return res.data.user
}

// 注册用户
export async function register(data: KB.RegisterUserInfo) {
  const res = await api.post<KB.LoginResponse>("/api/auth/local/register", data)

  localStorage.setItem(USER_TOKEN, res.data.jwt)
  return res.data.user
}

// 获取用户信息
export async function getUserInfo() {
  const res = await api.get<KB.UserInfo>("/api/users/me")
  return res.data
}
