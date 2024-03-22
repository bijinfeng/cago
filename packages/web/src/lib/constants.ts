import type { ThemeInput } from "react-activity-calendar"

export const USER_TOKEN = "user-token"
export const RESIZABLE_PANELS_LAYOUT = "react-resizable-panels:layout"
export const RESIZABLE_PANELS_COLLAPSED = "react-resizable-panels:collapsed"

const NOTICE_SWITCH_OPTIONS: KB.PreferenceSetting["options"] = [
  {
    label: "仅消息",
    value: "notice",
  },
  {
    label: "消息 + 邮件",
    value: "email",
  },
  {
    label: "不接收",
    value: "none",
  },
]

export const PREFERENCE_SETTING: KB.PreferenceGrouoSetting[] = [
  {
    title: "导航栏设置",
    children: [
      {
        key: "show_explore",
        title: "在左侧导航栏上显示「逛逛」入口",
        description: "关闭后，你仍然可以通过链接访问逛逛内容或把内容分享至你的花园",
        type: "SWITCH",
        defaultValue: true,
      },
    ],
  },
  {
    title: "提醒设置",
    children: [
      {
        key: "11",
        title: "在左侧导航栏上显示动态提醒",
        description: "关闭后，当左侧导航栏有新动态时，不展示相应位置的蓝点提示",
        type: "SWITCH",
        defaultValue: true,
      },
      {
        key: "12",
        title: "有新消息时，展示蓝点提醒",
        description: "关闭后，当有新消息时，不展示相应位置的蓝点提示",
        type: "SWITCH",
        defaultValue: true,
      },
    ],
  },
  {
    title: "消息设置",
    children: [
      {
        key: "21",
        title: "关注",
        description: "当他人关注我时",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
      {
        key: "22",
        title: "点赞",
        description: "当他人给我的文档点赞时",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
      {
        key: "23",
        title: "@ 和评论",
        description: "当他人@我，或者评论我的主题和文档时",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
      {
        key: "24",
        title: "待处理",
        description: "需要我审批的申请",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
      {
        key: "25",
        title: "系统通知",
        description: "风险提示，功能变更，运营活动",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
      {
        key: "26",
        title: "其他消息",
        description: "加入团队或知识小组，加入协作，创建话题等",
        type: "SELECT",
        options: NOTICE_SWITCH_OPTIONS,
        defaultValue: "email",
      },
    ],
  },
]

export const ACTIVITY_CALENDAR_THEME: ThemeInput = {
  light: ["#f4f5f5", "#daf6ea", "#c7f0df", "#82edc0", "#0bd07d", "#00663b"],
  dark: ["#ffffff0a", "#0e2f22", "#255641", "#18774f", "#29ad76", "#97d8bc"],
}
