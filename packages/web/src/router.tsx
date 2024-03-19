import { createBrowserRouter } from "react-router-dom"

import ProtectedLayout from "./views/layout/protected-layout"

import ErrorPage from "./views/404"

import Dashboard from "./views/dashboard"
import DashboardCollections from "./views/dashboard/collections"
import DashboardHome from "./views/dashboard/home"
import DashboardNotes from "./views/dashboard/notes"

import Docx from "./views/docx"
import ForgetPassword from "./views/forget-password"

import Setting from "./views/setting"
import NotificationsSetting from "./views/setting/notifications"
import ProfileSetting from "./views/setting/profile"

import Singin from "./views/singin"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedLayout />,
    loader: ProtectedLayout.loader,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "collections",
            element: <DashboardCollections />,
          },
          {
            path: "notes",
            element: <DashboardNotes />,
          },
        ],
      },
      {
        path: "/docx",
        element: <Docx />,
      },
      {
        path: "/setting",
        Component: Setting,
        children: [
          {
            path: "profile",
            element: <ProfileSetting />,
          },
          {
            path: "notifications",
            element: <NotificationsSetting />,
          },
        ],
      },
    ],
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
    path: "*",
    element: <ErrorPage />,
  },
])
