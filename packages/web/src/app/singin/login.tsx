import type { FormInstance } from "@pingtou/ui"
import { Button, Form, Input } from "@pingtou/ui"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRef } from "react"

interface FormValue {
  email: string
  password: string
}

export function Login() {
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

      <div className="flex justify-between items-end">
        <Button type="submit" onClick={handleSubmit}>
          登录
        </Button>
        <Link className="text-xs underline py-1" href="/forget-password">
          忘记密码
        </Link>
      </div>
    </Form>
  )
}
