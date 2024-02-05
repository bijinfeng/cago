"use client"

import { TooltipProvider } from "@pingtou/ui"
import React from "react"

interface ConfigProviderProps {
  children: React.ReactNode
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }) => {
  return (
    <TooltipProvider>
      {children}
    </TooltipProvider>
  )
}

export default ConfigProvider
