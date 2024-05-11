import React from "react"
import ReactDOM from "react-dom/client"
import { ConfigProvider } from "@pingtou/web"
import { RouterProvider } from "react-router-dom"
import "@pingtou/ui/index.css"

import { router } from "./router"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
)
