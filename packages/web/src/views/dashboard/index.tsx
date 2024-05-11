import React from "react"
import { Outlet } from "react-router-dom"
import { Sidebar } from "@/components/dashboard-sidebar"
import { DashboardLayout } from "@/components/dashboard-layout"

export const Dashboard = () => {
  return (
    <DashboardLayout
      left={({ isCollapsed }) => <Sidebar isCollapsed={isCollapsed} />}
      right={<Outlet />}
    />
  )
}
