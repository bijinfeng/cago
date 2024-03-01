import { api } from "./api"

export function login() {
  return api.get("/api/auth/login")
}
