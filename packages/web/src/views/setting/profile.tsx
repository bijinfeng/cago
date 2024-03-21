import type { FormInstance } from "@pingtou/ui"
import { Button, Form, Input, Textarea } from "@pingtou/ui"
import { useRef } from "react"
import { AvatarUpload } from "@/components/avatar-upload"

interface FormValue {
  avatar: string
  name: string
  description: string
  location: string
  job_title: string
}

function ProfileSetting() {
  const formRef = useRef<FormInstance<FormValue>>(null)

  return (
    <div className="max-w-[668px] mx-auto">
      <div className="pt-12 pb-7 text-xl sticky top-0 bg-white z-10">个人信息</div>
      <Form<FormValue> form={formRef} defaultValues={{ avatar: "http://localhost:5173/avatar.png" }}>
        <div className="grid grid-cols-2 gap-6">
          <Form.Item name="avatar" label="头像" className="col-span-2">
            <AvatarUpload />
          </Form.Item>
          <Form.Item name="name" label="昵称" required>
            <Input placeholder="必填" />
          </Form.Item>
          <Form.Item name="description" label="简介" className="col-span-2">
            <Textarea placeholder="简单介绍一下你自己" rows={6} />
          </Form.Item>
          <Form.Item name="location" label="地址">
            <Input placeholder="你所在的地址" />
          </Form.Item>
          <Form.Item name="job_title" label="领域">
            <Input placeholder="你所在的行业" />
          </Form.Item>
        </div>
      </Form>
      <Button className="mt-10">更新信息</Button>
    </div>
  )
}

export default ProfileSetting
