import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgTable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 36 36"
    ref={ref}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <rect width={35} height={35} x={0.5} y={0.5} fill="#FFF" stroke="#E7E9E8" rx={6} />
      <g transform="translate(6.5 8.89)">
        <path fill="#E7E9E8" d="M0 0h23v5.72Q14.294 6 10.216 6T0 5.72z" />
        <path
          fill="#00B96B"
          d="M3.8 2.11h4.4a.3.3 0 0 1 .3.3v1.103a.3.3 0 0 1-.3.3H3.8a.3.3 0 0 1-.3-.3V2.409a.3.3 0 0 1 .3-.3Z"
        />
        <rect width={1} height={15} x={5} y={5.609} fill="#BEC0BF" rx={0.25} />
        <rect width={1} height={15} x={11} y={5.609} fill="#BEC0BF" rx={0.25} />
        <rect width={1} height={14} x={17} y={5.609} fill="#BEC0BF" rx={0.25} />
        <path
          stroke="#BEC0BF"
          strokeLinecap="round"
          d="M.5 15.86h20m-20-5q6.23.375 10.191.25 3.962-.126 9.809-.25"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M.5 5.86q4.977.125 8.939 0 3.962-.126 11.061 0"
        />
        <rect width={23} height={21} y={-0.391} stroke="currentColor" rx={1} />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgTable);
const Memo = memo(ForwardRef);
export default Memo;
