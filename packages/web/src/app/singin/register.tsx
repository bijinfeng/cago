import type { FormInstance } from "@pingtou/ui"
import {
  Button,
  Form,
  Input,
} from "@pingtou/ui"
import { signIn } from "next-auth/react"
import { useRef } from "react"

interface FormValue {
  email: string
  password: string
  confirmPassword: string
}

export function Register() {
  const formRef = useRef<FormInstance<FormValue>>(null)

  // 登录成功后导航到首页
  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()
    const res = await signIn("credentials", { ...value, redirect: false })

    console.log(value, res)

    return value
  }

  return (
    <Form<FormValue> form={formRef}>
      <Form.Item name="email" label="邮箱" required>
        <Input placeholder="your@email.com" />
      </Form.Item>
      <Form.Item
        required
        name="password"
        label="密码"
      >
        <Input placeholder="Your password" type="password" />
      </Form.Item>
      <Form.Item
        required
        name="confirmPassword"
        label="确认密码"
      >
        <Input placeholder="Your password" type="password" />
      </Form.Item>

      <Button
        type="submit"
        onClick={handleSubmit}
      >
        Sign in
      </Button>
    </Form>
  )
}
