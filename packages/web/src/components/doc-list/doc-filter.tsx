import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger, Tabs, TabsList, TabsTrigger } from "@pingtou/ui"
import ArrowDownIcon from "@/assets/arrow-down.svg?react"

interface IMenuItem {
  label: string
  value: string
  children?: IMenuItem[]
}

interface IFilterItem {
  label: string
  value: string
  options: IMenuItem[]
}

const filterOptions: IFilterItem[] = [
  {
    label: "类型",
    value: "type",
    options: [
      {
        label: "全部",
        value: "all",
      },
      {
        label: "文档",
        value: "doc",
      },
      {
        label: "知识",
        value: "know",
      },
      {
        label: "问答",
        value: "ask",
      },
      {
        label: "讨论",
        value: "talk",
      },
    ],
  },
  {
    label: "归属",
    value: "belong",
    options: [
      {
        label: "所有",
        value: "all",
      },
      {
        label: "kebai",
        value: "my",
      },
    ],
  },
  {
    label: "创建者",
    value: "creator",
    options: [
      {
        label: "所有",
        value: "all",
      },
      {
        label: "我的",
        value: "shadcn",
      },
    ],
  },
]

function DocFilter() {
  const renderDocItemFilter = (item: IFilterItem) => {
    return (
      <DropdownMenu key={item.value}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-1 p-1 h-auto">
            <span>{item.label}</span>
            <ArrowDownIcon width={16} height={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-16">
          {item.options.map(option => (
            <DropdownMenuCheckboxItem key={option.value} checked>{option.label}</DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className="flex items-center justify-between">
      <Tabs>
        <TabsList className="ml-auto">
          <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">编辑过</TabsTrigger>
          <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">浏览过</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center space-x-2">
        {filterOptions.map(renderDocItemFilter)}
      </div>
    </div>
  )
}

export default DocFilter
