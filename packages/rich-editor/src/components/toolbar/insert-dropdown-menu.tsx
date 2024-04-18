import { Popover, PopoverContent, PopoverTrigger } from "@pingtou/ui"
import { useToggle } from "react-use"
import { Icons } from "@/components/common/icons"
import { ToolbarButton } from "@/components/common/toolbar-button"

export function InsertDropdownMenu() {
  const [on, toggle] = useToggle(true)

  return (
    <Popover modal={false} open={on} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <ToolbarButton pressed={on} className="p-1">
          <Icons.insertCard size={18} className="text-primary" />
        </ToolbarButton>
      </PopoverTrigger>

      <PopoverContent align="start">

      </PopoverContent>
    </Popover>
  )
}
