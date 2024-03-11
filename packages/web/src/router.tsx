import { createBrowserRouter } from "react-router-dom"

import Dashboard from "./views/dashboard"
import ForgetPassword from "./views/forget-password"
import Singin from "./views/singin"

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/singin",
    element: <Singin />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
])
