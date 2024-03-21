import type { FormInstance } from "@pingtou/ui"
import { Button, Form, Input } from "@pingtou/ui"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import { register } from "@/services"

type FormValue = KB.RegisterUserInfo

export function Register() {
  const formRef = useRef<FormInstance<FormValue>>(null)
  const navigate = useNavigate()

  // 登录成功后导航到首页
  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()
    await register(value)

    navigate("/dashboard")
  }

  return (
    <Form<FormValue> form={formRef}>
      <Form.Item required name="username" label="姓名">
        <Input placeholder="Your name" />
      </Form.Item>
      <Form.Item name="email" label="邮箱" required>
        <Input placeholder="your@email.com" />
      </Form.Item>
      <Form.Item required name="password" label="密码">
        <Input placeholder="Your password" type="password" />
      </Form.Item>

      <Button type="submit" onClick={handleSubmit}>
        注册
      </Button>
    </Form>
  )
}
