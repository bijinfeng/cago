import { Button } from "@pingtou/ui"
import { PlusIcon } from "@radix-ui/react-icons"
import React from "react"

const AddDoc: React.FC = () => {
  return (
    <Button variant="outline" size="icon" className="w-8 h-8">
      <PlusIcon width={16} height={16} />
    </Button>
  )
}

export default AddDoc
