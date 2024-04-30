import { ApolloProvider } from "@apollo/client"
import { Toaster, TooltipProvider } from "@pingtou/ui"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { RouterProvider } from "react-router-dom"

import { router } from "./router"
import { ThemeProvider } from "@/components/theme"
import { graphqlClient } from "@/services/graphql"

export default function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <DndProvider backend={HTML5Backend}>
        <TooltipProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
            <Toaster richColors />
          </ThemeProvider>
        </TooltipProvider>
      </DndProvider>
    </ApolloProvider>
  )
}
