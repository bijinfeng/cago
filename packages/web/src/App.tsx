import { RouterProvider } from "react-router-dom"

import { router } from "./router"
import Provider from "@/context/client-provider"

export default function App() {
  return (
    <Provider>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </Provider>
  )
}
