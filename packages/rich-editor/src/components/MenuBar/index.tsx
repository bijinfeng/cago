import { Separator } from "@pingtou/ui"
import React from "react"

import { BoldButton } from "./BoldButton"
import { FontSizeButton } from "./FontSizeButton"
import { FormatClearButton } from "./FormatClearButton"
import { FormatPainterButton } from "./FormatPainterButton"
import { HeadingButton } from "./HeadingButton"
import { HrButton } from "./HrButton"
import { ItalicButton } from "./ItalicButton"
import { QuoteButton } from "./QuoteButton"
import { RedoButton } from "./RedoButton"
import { StrikeButton } from "./StrikeButton"
import { TaskListButton } from "./TaskListButton"
import { UnderlineButton } from "./UnderlineButton"
import { UndoButton } from "./UndoButton"
import { UnOrderListButton } from "./UnorderListButtton"
import { MoreToggle } from "@/components/MoreToggle"

export const MenuBar: React.FC = () => {
  return (
    <div className="flex gap-2 items-center">
      <MoreToggle />
      <Separator orientation="vertical" className="h-6" />
      <UndoButton />
      <RedoButton />
      <FormatPainterButton />
      <FormatClearButton />
      <Separator orientation="vertical" className="h-6" />
      <HeadingButton />
      <FontSizeButton />
      <BoldButton />
      <ItalicButton />
      <StrikeButton />
      <UnderlineButton />
      <Separator orientation="vertical" className="h-6" />
      <UnOrderListButton />
      <TaskListButton />
      <QuoteButton />
      <HrButton />
    </div>
  )
}