import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgUnderline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d="M184 24c5.43 0 9.848 4.327 9.996 9.72L194 34v94.393C194 161.1 164.16 187 128 187c-35.8 0-65.403-25.385-65.991-57.628l-.009-.98V34c0-5.523 4.477-10 10-10 5.43 0 9.848 4.327 9.996 9.72L82 34v94.393C82 149.375 102.305 167 128 167c25.438 0 45.593-17.274 45.994-37.979l.006-.628V34c0-5.523 4.477-10 10-10"
      />
      <rect width={176} height={22} x={40} y={210} rx={11} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUnderline);
const Memo = memo(ForwardRef);
export default Memo;
