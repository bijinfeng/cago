import { Toaster, TooltipProvider } from "@pingtou/ui"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { RouterProvider } from "react-router-dom"

import { router } from "./router"
import { ThemeProvider } from "@/components/theme"

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <TooltipProvider>
        <ThemeProvider>
          <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
          <Toaster richColors />
        </ThemeProvider>
      </TooltipProvider>
    </DndProvider>
  )
}
