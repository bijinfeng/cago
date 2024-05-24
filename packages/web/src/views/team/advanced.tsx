import React from 'react';
import { Button } from '@pingtou/ui';
import { Setting } from '@/components/settings';

export const TeamAdvanced = () => {
  const options: KB.PreferenceGrouoSetting[] = [
    {
      title: '高级选项',
      children: [
        {
          key: '111',
          title: '动态',
          description:
            '开启后可展示本团队内文档、任务、话题等的更新动态，方便成员获取重要信息，提高协同效率。',
          type: 'SWITCH',
        },
        {
          key: '222',
          title: '话题知识库',
          description: '开启后成员可聚焦话题展开讨论，在线异步交流。',
          type: 'SWITCH',
        },
        {
          key: '3333',
          title: '资源知识库',
          description: '开启后成员可分享和交流设计稿、图片或本地文件等，用于管理图片和文件资源。',
          type: 'SWITCH',
        },
        {
          key: '444',
          title: '任务',
          description: '开启后可用于管理团队事务，可帮助团队有序规划、执行和跟进任务。',
          type: 'SWITCH',
        },
      ],
    },
    {
      title: '团队操作',
      children: [
        {
          key: '111',
          title: '删除团队',
          description: '删除权限只有团队管理员拥有。注意！删除团队后，你将丢失该团队中的所有数据。',
          suffix: (
            <Button className="w-11 h-6 border-red-600 !text-red-600" variant="outline">
              删除
            </Button>
          ),
        },
      ],
    },
  ];

  return <Setting options={options} />;
};
