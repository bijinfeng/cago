import { cookies } from "next/headers"
import React from "react"
import DashboardLayout from "./wrapper"

function getDefaultLayout() {
  const layout = cookies().get("react-resizable-panels:layout")
  if (layout)
    return JSON.parse(layout.value)

  return [33, 67]
}

const Dashboard: React.FC = () => {
  const defaultLayout = getDefaultLayout()

  return (
    <DashboardLayout defaultLayout={defaultLayout} />
  )
}

export default Dashboard
