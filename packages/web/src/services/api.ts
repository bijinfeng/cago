import { toast } from "@pingtou/ui"
import axios from "axios"
import { get } from "lodash-es"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
})

api.interceptors.request.use((config) => {
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

  console.log(error)
  return Promise.reject(error)
})
