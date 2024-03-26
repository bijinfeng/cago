import { Toaster, TooltipProvider } from "@pingtou/ui"
import { RouterProvider } from "react-router-dom"

import { router } from "./router"
import { ThemeProvider } from "@/components/theme"

export default function App() {
  return (
    <TooltipProvider>
      <ThemeProvider>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        <Toaster richColors />
      </ThemeProvider>
    </TooltipProvider>
  )
}
