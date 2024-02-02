import * as React from "react"
import type { Ref, SVGProps } from "react"
import { forwardRef, memo } from "react"

function SvgBold(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
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
        <path d="M129 28c30.376 0 55 24.624 55 55s-24.624 55-55 55H60V44c0-8.837 7.163-16 16-16zm-49 90h49c19.33 0 35-15.67 35-35 0-19.137-15.358-34.686-34.421-34.995L129 48H80z" />
        <path d="M144.5 118c30.652 0 55.5 24.848 55.5 55.5S175.152 229 144.5 229H76c-8.837 0-16-7.163-16-16v-95zM80 209h64.5c19.606 0 35.5-15.894 35.5-35.5 0-19.41-15.578-35.182-34.913-35.495L144.5 138H80z" />
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgBold)
const Memo = memo(ForwardRef)
export default Memo
