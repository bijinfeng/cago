import { type LoaderFunctionArgs, redirect } from "react-router-dom"
import { getUserInfo } from "@/services"

export async function protectedLoader(_params: LoaderFunctionArgs) {
  try {
    const res = await getUserInfo()
    return res || redirect("/singin")
  }
  catch (error) {
    return redirect("/singin")
  }
}
