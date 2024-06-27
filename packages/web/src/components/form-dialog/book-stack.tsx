import { Dialog, DialogContent, Form, Textarea, Button, DialogHeader } from '@pingtou/ui';
import { useMount, useBoolean } from 'ahooks';
import type { FormInstance } from '@pingtou/ui';
import { useRef } from 'react';
import { omit, tryit } from 'radash';

import { Select } from '@/components/select';
import { formEvent } from '@/components/form-dialog/events';
import { BookTitle } from '@/components/book-title';
import { addBook } from '@/services';

interface FormValue {
  name?: { title: string; icon: string };
  description?: string;
  public: '1' | '2';
  group_id?: string;
}

const DEFAULT_FORM_VALUE: FormValue = {
  public: '2',
  name: { title: '', icon: 'default' },
};

export const BookStackDialog = () => {
  const [open, { set, setTrue, setFalse }] = useBoolean(false);
  const [submitDisabled, submitAction] = useBoolean(true);
  const formRef = useRef<FormInstance<FormValue>>(null);

  useMount(() => {
    formEvent.on('create-book-stack', () => setTrue());
  });

  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger();
    if (!validated) return;

    const values = formRef.current!.getValues();
    const rest = omit(values, ['name']);
    const [err] = await tryit(addBook)(Object.assign(rest, values.name));
    !err && setFalse();
  };

  const handleValueChange = (value: FormValue) => {
    submitAction.set(!value?.name?.title);
  };

  return (
    <Dialog open={open} onOpenChange={set}>
      <DialogContent>
        <DialogHeader>新建知识库</DialogHeader>
        <Form<FormValue>
          form={formRef}
          className="mt-2"
          defaultValues={DEFAULT_FORM_VALUE}
          onChange={handleValueChange}
        >
          <Form.Item label="基本信息" name="name">
            <BookTitle placeholder="知识库名称" inputClassName="flex-1" />
          </Form.Item>

          <Form.Item name="description" className="!mt-4">
            <Textarea maxLength={255} rows={6} placeholder="知识库简介（选填）" />
          </Form.Item>

          <Form.Item label="新建至" name="group_id">
            <Select
              options={[
                { label: '公开区', value: '2' },
                { label: 'kebai', value: '1' },
              ]}
            />
          </Form.Item>

          <Form.Item label="公开性" name="public">
            <Select
              options={[
                { label: '空间所有成员可访问', value: '2' },
                { label: '仅协作者可访问', value: '1' },
              ]}
            />
          </Form.Item>

          <Button className="w-full" disabled={submitDisabled} onClick={handleSubmit}>
            新建
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
