import type { StoreApi, UseBoundStore } from "zustand"
import { create } from "zustand"

interface UserState {
  user: KB.UserInfo
  setUser: (user: KB.UserInfo) => void
}

// eslint-disable-next-line  import/no-mutable-exports
export let useUserStore: UseBoundStore<StoreApi<UserState>>

export function initUserStore(user: KB.UserInfo) {
  useUserStore = create<UserState>(set => ({
    user,
    setUser: user => set({ user }),
  }))
}
