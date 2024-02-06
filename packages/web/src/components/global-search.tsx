import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, Input } from "@pingtou/ui"
import React from "react"
import SearchIcon from "@/assets/search.svg"

const GlobalSearch: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className="flex items-center space-x-1" onClick={() => setOpen(true)}>
        <SearchIcon />
        <Input readOnly placeholder="搜索" className="border-none shadow-transparent h-8 p-0" />
      </div>
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
