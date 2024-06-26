import {
  Dialog,
  DialogContent,
  DialogDescription,
  Form,
  Textarea,
  Button,
  DialogHeader,
  Switch,
  Label,
} from '@pingtou/ui';
import { BookTitle } from '@/components/book-title';
import { useMount, useBoolean } from 'ahooks';
import { formEvent } from '@/components/form-dialog/events';
import type { FormInstance } from '@pingtou/ui';
import { useRef } from 'react';

interface FormValue {
  name?: { title: string; icon: string };
  description?: string;
}

export const TeamDialog = () => {
  const [open, { set, setTrue }] = useBoolean(false);
  const [submitDisabled, submitAction] = useBoolean(true);

  const formRef = useRef<FormInstance<FormValue>>(null);

  useMount(() => {
    formEvent.on('create-team', () => setTrue());
  });

  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger();
    if (!validated) return;

    const values = formRef.current!.getValues();
    console.log(values);
  };

  const handleValueChange = (value: FormValue) => {
    submitAction.set(!value?.name?.title);
  };

  return (
    <Dialog open={open} onOpenChange={set}>
      <DialogContent>
        <DialogHeader>新建团队</DialogHeader>
        <DialogDescription>和成员一起进行项目协作和知识管理</DialogDescription>
        <Form<FormValue> form={formRef} className="mt-2" onChange={handleValueChange}>
          <Form.Item label="基本信息" name="name">
            <BookTitle placeholder="团队名称" inputClassName="flex-1" />
          </Form.Item>

          <Form.Item name="description" className="!mt-4">
            <Textarea maxLength={255} rows={6} placeholder="团队简介（选填）" />
          </Form.Item>

          <Form.Item label="公开性" name="description">
            {({ value, onChange, ref }) => (
              <div ref={ref} className="flex items-center justify-between">
                <Label>公开给空间所有成员</Label>
                <Switch checked={!!value} onCheckedChange={onChange} />
              </div>
            )}
          </Form.Item>
          <Button className="w-full" disabled={submitDisabled} onClick={handleSubmit}>
            新建
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
