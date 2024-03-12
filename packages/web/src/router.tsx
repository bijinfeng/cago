import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./views/404"
import Dashboard, { protectedLoader } from "./views/dashboard"
import ForgetPassword from "./views/forget-password"
import Setting from "./views/setting"
import ProfileSetting from "./views/setting/profile"
import Singin from "./views/singin"

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    loader: protectedLoader,
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
  {
    path: "/setting",
    Component: Setting,
    children: [
      {
        index: true,
        path: "profile",
        element: <ProfileSetting />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])
