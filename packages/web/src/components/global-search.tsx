import { Button, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@pingtou/ui"
import React from "react"
import SearchIcon from "@/assets/search.svg?react"
import { IconButton } from "@/components/icon-button"

interface GlobalSearchProps {
  isCollapsed?: boolean
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ isCollapsed }) => {
  const [open, setOpen] = React.useState(false)

  const renderTrigger = () => {
    if (isCollapsed) {
      return (
        <IconButton tooltip="搜索" onClick={() => setOpen(true)} className="w-8 h-8">
          <SearchIcon width={18} height={18} />
        </IconButton>
      )
    }

    return (
      <Button variant="secondary" className="flex flex-1 justify-start items-center gap-3 h-8 px-2" onClick={() => setOpen(true)}>
        <SearchIcon />
        <span>搜索</span>
      </Button>
    )
  }

  return (
    <>
      {renderTrigger()}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="搜索内容" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}

export default GlobalSearch
