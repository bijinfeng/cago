declare namespace KB {
  type Theme = "light" | "dark" | "system"
  type ThemeMode = "light" | "dark"

  interface AppSetting {
    version: string
  }

  // 偏好设置
  interface PreferenceSetting {
    key: string
    title: string
    description: string
    type: "SWITCH" | "SELECT"
    options?: {
      label: string
      value: string
    }[]
    defaultValue?: any
  }

  interface PreferenceGrouoSetting {
    title: string
    children: PreferenceSetting[]
  }

  interface LoginSession {
    accountId: number
    browser: string
    createAt: string
    id: number
    ip: string
    isCurrent: boolean
    location: string
    os: string
  }

  interface LoginAuditLog {
    id: number
    ip: string
    createAt: string
    traceId: string
    action: "login" | "logout"
  }
}
