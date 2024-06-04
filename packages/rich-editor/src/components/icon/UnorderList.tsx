import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgUnorderList = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd">
      <path
        fillRule="nonzero"
        d="M215 118c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L215 138H96c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996L96 118zm0-83c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L215 55H96c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996L96 35zm0 166c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L215 221H96c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996L96 201z"
      />
      <circle cx={44} cy={45} r={16} />
      <circle cx={44} cy={128} r={16} />
      <circle cx={44} cy={211} r={16} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUnorderList);
const Memo = memo(ForwardRef);
export default Memo;
