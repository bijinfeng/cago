import { KeyRound, LayoutGrid, LineChart, Settings, ShieldCheck, User } from 'lucide-react';
import React from 'react';
import { Logo } from '@/components/logo';
import { SettingLayout, type NavOption } from '@/layout/setting-layout';

const navs: NavOption[] = [
  {
    title: '账号',
    children: [
      {
        title: '个人信息',
        icon: <User />,
        path: '/setting/profile',
      },
      {
        title: '偏好设置',
        icon: <Settings />,
        path: '/setting/notifications',
      },
      {
        title: '安全日志',
        icon: <ShieldCheck />,
        path: '/setting/safety',
      },
    ],
  },
  {
    title: '创作中心',
    children: [
      {
        title: '数据统计',
        icon: <LineChart />,
        path: '/setting/stats',
        withTitle: false,
        maxWidth: 1080,
      },
    ],
  },
  {
    title: '开发者',
    children: [
      {
        title: 'Token',
        icon: <KeyRound />,
        path: '/setting/tokens',
      },
      {
        title: '授权',
        icon: <LayoutGrid />,
        path: '/setting/authorizations',
      },
    ],
  },
];

function Setting() {
  return <SettingLayout navs={navs} logo={<Logo />} title="返回" onBack={() => {}} />;
}

export default Setting;
