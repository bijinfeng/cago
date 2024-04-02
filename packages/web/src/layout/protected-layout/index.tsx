import React from "react"
import { Outlet, useLoaderData } from "react-router-dom"
import { protectedLoader } from "./loader"
import { initUserStore } from "@/store/user"

const ProtectedLayout: React.FC = () => {
  const user = useLoaderData() as KB.UserInfo

  initUserStore(user)

  return (
    <div className="h-screen">
      <Outlet />
    </div>
  )
}

export default Object.assign(ProtectedLayout, { loader: protectedLoader })
