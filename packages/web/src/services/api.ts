import { toast } from "@pingtou/ui"
import axios from "axios"
import { get } from "underscore"
import { USER_TOKEN } from "@/lib/constants"

export const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_TOKEN)

  if (token)
    config.headers.Authorization = `Bearer ${token}`

  return config
}, (error) => {
  return Promise.reject(error)
})

api.interceptors.response.use((response) => {
  return response
}, (error) => {
  const errorMessage = get(error, ["response", "data", "error"])

  if (errorMessage?.message)
    toast.error(errorMessage.message)

  return Promise.reject(error)
})
