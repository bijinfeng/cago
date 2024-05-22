import React, { useRef } from 'react';
import { Button, Form, Input, Textarea } from '@pingtou/ui';
import type { FormInstance } from '@pingtou/ui';
import { BookIconPopover } from '@/components/book-icon-popover';

interface FormValue {
  avatar: KB.BookIconType;
  name: string;
  description: string;
}

export const TeamBasic: React.FC = () => {
  const formRef = useRef<FormInstance<FormValue>>(null);

  return (
    <Form<FormValue> form={formRef} defaultValues={{ avatar: 'group' }}>
      <Form.Item name="avatar" label="头像">
        <BookIconPopover size="large" />
      </Form.Item>
      <Form.Item name="name" label="名称" required>
        <Input placeholder="名称" className="w-1/2" />
      </Form.Item>
      <Form.Item name="description" label="简介">
        <Textarea placeholder="简单介绍一下你自己" rows={6} />
      </Form.Item>

      <Button className="!mt-10">更新信息</Button>
    </Form>
  );
};
