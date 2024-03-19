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

// 上传图片
export async function uploadImage(file: File | Blob) {
  const form = new FormData()
  form.append("files", file)

  const res = await api.post<KB.UploadFile[]>("/api/upload", form)
  return res.data[0]
}
