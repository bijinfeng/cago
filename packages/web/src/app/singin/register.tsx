import type { FormInstance } from "@pingtou/ui"
import { Button, Form, Input } from "@pingtou/ui"
import { useRouter } from "next/navigation"
import { useRef } from "react"

import { register } from "@/services"
import { useUserStore } from "@/store/user"

type FormValue = KB.RegisterUserInfo

export function Register() {
  const formRef = useRef<FormInstance<FormValue>>(null)
  const setUser = useUserStore(state => state.setUser)
  const router = useRouter()

  // 登录成功后导航到首页
  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()
    const res = await register(value)

    setUser(res)
    router.push("/dashboard")
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
