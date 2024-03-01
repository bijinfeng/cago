"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"

interface IProviderProps {
  session: Session | null
}

const Provider: React.FC<React.PropsWithChildren<IProviderProps>> = ({
  children,
  session,
}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider
