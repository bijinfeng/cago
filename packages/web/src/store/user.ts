import { create } from "zustand"

interface UserState {
  user: KB.UserInfo | null
  setUser: (user: KB.UserInfo) => void
}

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: user => set({ user }),
}))
