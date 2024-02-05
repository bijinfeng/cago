"use client"

import type {
  FormInstance,
} from "@pingtou/ui"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  Input,
} from "@pingtou/ui"
import Link from "next/link"
import React, { useRef } from "react"
import { Icons } from "@/components/icons"

interface FormValue {
  email: string
  password: string
}

const Singin: React.FC = () => {
  const formRef = useRef<FormInstance<FormValue>>(null)

  // 登录成功后导航到首页
  const handleSubmit = async () => {
    const validated = await formRef.current?.trigger()
    if (!validated)
      return

    const value = formRef.current!.getValues()

    return value
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className=" w-[400px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form<FormValue> form={formRef}>
            <Form.Item name="email" label="Email address" required>
              <Input placeholder="your@email.com" />
            </Form.Item>
            <Form.Item
              required
              name="password"
              label="Password"
              labelClassName="flex items-center justify-between"
              labelSuffix={(
                <Link className="text-xs underline" href="/forget-password">
                  I forget password
                </Link>
              )}
            >
              <Input placeholder="Your password" type="password" />
            </Form.Item>
          </Form>
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" asChild>
              <Link href="">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Link>
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full"
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Singin
