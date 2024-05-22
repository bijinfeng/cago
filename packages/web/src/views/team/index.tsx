import React from 'react';
import { SettingLayout, type NavOption } from '@/layout/setting-layout';
import {
  UsersRound,
  Trash2,
  MessageSquareText,
  Settings,
  BarChart3,
  Key,
  Shield,
  LockKeyhole,
} from 'lucide-react';
import { BookIcon } from '@/components/book-icon';

const navs: NavOption[] = [
  {
    title: '设置',
    children: [
      {
        title: '团队信息',
        icon: <UsersRound />,
        path: '/team/basic',
      },
      {
        title: '权限',
        icon: <LockKeyhole />,
        path: '/team/permission',
      },
      {
        title: '更多设置',
        icon: <Settings />,
        path: '/team/advanced',
      },
    ],
  },
  {
    title: '高级功能',
    children: [
      {
        title: '统计',
        icon: <BarChart3 />,
        path: '/team/statistics',
      },
      {
        title: '安全日志',
        icon: <Shield />,
        path: '/team/logs',
      },
      {
        title: '消息推送',
        icon: <MessageSquareText />,
        path: '/team/webhooks',
      },
      {
        title: '回收站',
        icon: <Trash2 />,
        path: '/team/trash',
      },
    ],
  },
  {
    title: '开发者',
    children: [
      {
        title: 'Token',
        icon: <Key />,
        path: '/team/tokens',
      },
    ],
  },
];

export const Team: React.FC = () => {
  return (
    <SettingLayout
      navs={navs}
      logo={<BookIcon iconType="group" />}
      title="kebai"
      name="团队管理"
      onBack={() => {}}
    />
  );
};
