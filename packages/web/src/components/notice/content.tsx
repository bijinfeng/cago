import { Tabs, TabsList, TabsTrigger } from "@pingtou/ui"

function Content() {
  return (
    <div className="px-4 py-2">
      <Tabs>
        <TabsList className="ml-auto">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">未读</TabsTrigger>
          <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">已读</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export default Content
