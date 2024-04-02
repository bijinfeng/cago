import { createBrowserRouter } from "react-router-dom"

import BlogLayout from "./views/layout/blog-layout"
import ProtectedLayout from "./views/layout/protected-layout"

import ErrorPage from "./views/404"

import Dashboard from "./views/dashboard"
import DashboardCollections from "./views/dashboard/collections"
import DashboardHome from "./views/dashboard/home"
import DashboardNotes from "./views/dashboard/notes"

import DocxDetail from "./views/docx/detail"
import Docx from "./views/docx/home"

import ForgetPassword from "./views/forget-password"

import Setting from "./views/setting"
import AuthorizationsSetting from "./views/setting/authorizations"
import NotificationsSetting from "./views/setting/notifications"
import ProfileSetting from "./views/setting/profile"
import SafetySetting from "./views/setting/safety"
import StatsSetting from "./views/setting/stats"
import TokensSetting from "./views/setting/tokens"

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
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Docx />,
          },
          {
            path: ":id",
            element: <DocxDetail />,
          },
        ],
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
          {
            path: "authorizations",
            element: <AuthorizationsSetting />,
          },
          {
            path: "safety",
            element: <SafetySetting />,
          },
          {
            path: "stats",
            element: <StatsSetting />,
          },
          {
            path: "tokens",
            element: <TokensSetting />,
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
