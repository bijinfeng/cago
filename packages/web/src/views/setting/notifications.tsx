import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch } from "@pingtou/ui"
import React from "react"
import { PREFERENCE_SETTING } from "@/lib/constants"

const SettingItem: React.FC<{ data: KB.PreferenceSetting }> = ({ data }) => {
  const renderForm = () => {
    if (data.type === "SWITCH")
      return <Switch defaultChecked={data.defaultValue} />

    if (data.type === "SELECT") {
      return (
        <Select defaultValue={data.defaultValue}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {data.options?.map(item => (
              <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      )
    }

    return null
  }

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <div className="text-sm font-normal leading-relaxed">{data.title}</div>
        <div className="mt-1.5 text-sm font-normal leading-relaxed text-muted-foreground">{data.description}</div>
      </div>
      {renderForm()}
    </div>
  )
}

function NotificationsSetting() {
  return (
    <div className="max-w-[668px] mx-auto">
      <div className="pt-12 pb-7 text-xl sticky top-0 bg-white z-10">偏好设置</div>
      {PREFERENCE_SETTING.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Separator className="my-7" />}
          <div>
            <div className="mb-4 text-base font-medium">{item.title}</div>
            <div className=" space-y-6">
              {item.children.map(it => <SettingItem data={it} key={it.key} />)}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NotificationsSetting
