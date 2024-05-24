import React from 'react';
import { RadioGroup, RadioGroupItem, Label, Separator, Switch } from '@pingtou/ui';

const permissions = [
  {
    title: '团队权限',
    children: [
      {
        title: '管理员',
        desc: '管理员拥有所有权限',
      },
      {
        title: '成员',
        permissions: [
          {
            label: '允许成员新建知识库',
            value: 'xxx',
          },
          {
            label: '允许成员添加、删除成员',
            value: 'aaa',
          },
        ],
      },
      {
        title: '只读成员',
        desc: '仅拥有只读权限',
      },
    ],
  },
  {
    title: '知识库权限',
    children: [
      {
        title: '可管理',
        desc: '拥有知识库的所有权限',
      },
      {
        title: '可编辑',
        permissions: [
          {
            label: '允许修改知识库权限',
            value: 'xxx1',
          },
          {
            label: '允许修改知识库设置',
            value: 'xxx2',
          },
          {
            label: '允许导出知识库',
            value: 'xxx3',
          },
          {
            label: '允许公开分享知识库',
            value: 'xxx4',
          },
          {
            label: '允许公开分享文档',
            value: 'xxx5',
          },
          {
            label: '允许导出文档',
            value: 'xxx6',
          },
        ],
      },
      {
        title: '可阅读',
        desc: '仅拥有只读和评论权限',
      },
    ],
  },
];

export const TeamPermission: React.FC = () => {
  return (
    <div className="text-sm leading-[22px]">
      <h3 className="text-base font-medium mb-4">公开性</h3>
      <RadioGroup defaultValue="comfortable" className="gap-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1" className="leading-6">
            仅团队成员可访问
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2" className="leading-6">
            空间所有成员可访问
          </Label>
        </div>
      </RadioGroup>
      <Separator className="my-7" />
      {permissions.map((item) => (
        <React.Fragment key={item.title}>
          <h3 className="text-base font-medium mb-4">{item.title}</h3>
          {item.children.map((it) => (
            <React.Fragment key={it.title}>
              <p>{it.title}</p>
              {it.desc && <div className="text-muted-foreground mb-4">{it.desc}</div>}
              {it.permissions &&
                it.permissions.map((i) => (
                  <div key={i.value} className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">{i.label}</span>
                    <Switch />
                  </div>
                ))}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
