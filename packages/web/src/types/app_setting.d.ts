declare namespace KB {
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
}
