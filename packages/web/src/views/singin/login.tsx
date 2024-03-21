import type { FormInstance } from "@pingtou/ui"
import { Button, Form, Input } from "@pingtou/ui"
import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login } from "@/services"

type FormValue = KB.LoginUserInfo

export function Login() {
  const formRef = useRef<FormInstance<FormValue>>(null)
  const navigate = useNavigate()

  // 登录成功后导航到首页
  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()

    await login(value)

    navigate("/dashboard")
  }

  return (
    <Form<FormValue> form={formRef}>
      <Form.Item name="identifier" label="邮箱" required>
        <Input placeholder="your@email.com" />
      </Form.Item>
      <Form.Item required name="password" label="密码">
        <Input placeholder="Your password" type="password" />
      </Form.Item>

      <div className="flex justify-between items-end">
        <Button type="submit" onClick={handleSubmit}>
          登录
        </Button>
        <Link className="text-xs underline py-1" to="/forget-password">
          忘记密码
        </Link>
      </div>
    </Form>
  )
}
