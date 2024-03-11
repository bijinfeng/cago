import { Button, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@pingtou/ui"
import React from "react"
import SearchIcon from "@/assets/search.svg?react"

const GlobalSearch: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button variant="secondary" className="flex flex-1 justify-start items-center space-x-1 h-8 px-3" onClick={() => setOpen(true)}>
        <SearchIcon />
        <span>搜索</span>
      </Button>
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
