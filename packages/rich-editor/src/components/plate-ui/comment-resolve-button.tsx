"use client"

import React from "react"
import { cn } from "@udecode/cn"
import {
  CommentResolveButton as CommentResolveButtonPrimitive,
  useComment,
} from "@udecode/plate-comments"

import { buttonVariants } from "./button"
import { Icons } from "@/components/icons"

export function CommentResolveButton() {
  const comment = useComment()!

  return (
    <CommentResolveButtonPrimitive
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "h-6 p-1 text-muted-foreground",
      )}
    >
      {comment.isResolved
        ? (
          <Icons.refresh className="h-4 w-4" />
          )
        : (
          <Icons.check className="h-4 w-4" />
          )}
    </CommentResolveButtonPrimitive>
  )
}
