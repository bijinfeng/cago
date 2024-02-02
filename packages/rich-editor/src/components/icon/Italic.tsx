import * as React from "react"
import type { Ref, SVGProps } from "react"
import { forwardRef, memo } from "react"

function SvgItalic(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      ref={ref}
      {...props}
    >
      <g fill="currentColor">
        <path d="M135.012 43.64c1.121-5.408 6.414-8.883 11.822-7.762 5.316 1.102 8.765 6.235 7.815 11.546l-.053.275-33.998 164.017c-1.121 5.408-6.414 8.883-11.822 7.762-5.316-1.102-8.765-6.235-7.815-11.547l.053-.275z" />
        <path d="M186 29.25c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996l-.28.004h-80c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996l.28-.004zm-36 197.5c5.523 0 10-4.477 10-10 0-5.43-4.327-9.848-9.72-9.996l-.28-.004H70c-5.523 0-10 4.477-10 10 0 5.43 4.327 9.848 9.72 9.996l.28.004z" />
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgItalic)
const Memo = memo(ForwardRef)
export default Memo
