"use client"

import { Toaster, TooltipProvider } from "@pingtou/ui"
import React from "react"

function Provider(props: React.PropsWithChildren) {
  const { children } = props

  return (
    <TooltipProvider>
      {children}
      <Toaster richColors />
    </TooltipProvider>
  )
}

export default Provider
