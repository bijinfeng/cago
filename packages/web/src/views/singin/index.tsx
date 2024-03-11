import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@pingtou/ui"
import React from "react"
import { Link } from "react-router-dom"

import { Login } from "./login"
import { Register } from "./register"
import LogoIcon from "@/assets/logo.svg?react"
import { Icons } from "@/components/icons"

const Singin: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(book.jpg)` }}
    >
      <Card className="flex w-[600px] overflow-hidden">
        <div className="w-16 bg-primary">
          <Link to="/" className="flex justify-center py-4">
            <LogoIcon color="white" width="32" height="32" />
          </Link>
        </div>
        <Tabs defaultValue="login" className="flex-1">
          <CardHeader className="px-0">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent py-0 px-6">
              <TabsTrigger
                value="login"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                登录
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                注册
              </TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent className="flex">
            <div className="flex-1">
              <TabsContent value="login">
                <Login />
              </TabsContent>
              <TabsContent value="register">
                <Register />
              </TabsContent>
            </div>

            <Separator orientation="vertical" className="mx-4 h-auto" />

            <div className="flex flex-col w-40 space-y-4">
              <Button variant="outline" asChild>
                <Link to="">
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  Github
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Link>
              </Button>
            </div>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  )
}

export default Singin
