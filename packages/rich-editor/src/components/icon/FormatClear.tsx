import * as React from "react"
import type { Ref, SVGProps } from "react"
import { forwardRef, memo } from "react"

function SvgFormatClear(props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        d="M889.186 384.07 677.671 172.56c-53.063-53.063-139.094-53.063-192.157 0L134.617 523.457c-53.063 53.063-53.063 139.099 0 192.158l170.196 170.2a41.35 41.35 0 0 0 29.243 12.11h215.001a41.35 41.35 0 0 0 29.184-12.05L889.155 576.26c53.094-53.09 53.094-139.126.031-192.19M830.7 442.558c20.48 20.472 20.764 53.492.855 74.319l-.961.984-298.618 297.358H351.185l-158.09-158.086c-20.76-20.763-20.76-54.43 0-75.193l350.901-350.897c20.764-20.764 54.43-20.764 75.193 0l211.515 211.511z"
      />
      <path
        fill="currentColor"
        d="m685.505 678.754-58.19 58.77-317.587-314.43 58.191-58.774zm197.55 136.508c23.46 0 42.483 18.514 42.483 41.353 0 22.45-18.38 40.724-41.294 41.338l-1.19.016h-454.6c-23.462 0-42.485-18.514-42.485-41.354 0-22.449 18.381-40.723 41.295-41.338l1.19-.015z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgFormatClear)
const Memo = memo(ForwardRef)
export default Memo
