import React from "react"
import { Item } from "./item"

export const Catalog: React.FC = () => {
  return (
    <div style={{ scrollbarWidth: "thin", scrollbarColor: "#e7e9e8 #fff" }}>
      <div>
        <Item level={1} />
      </div>
    </div>
  )
}
