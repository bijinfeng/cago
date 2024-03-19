import React from "react"
import { Item } from "./item"

export const Catalog: React.FC = () => {
  return (
    <div className="kb-scrollbar">
      <div>
        <Item level={1} />
      </div>
    </div>
  )
}
