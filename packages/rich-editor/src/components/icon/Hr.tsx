import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgHr = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    ref={ref}
    {...props}
  >
    <rect width={223} height={24} x={17} y={116} fill="currentColor" fillRule="evenodd" rx={12} />
  </svg>
);
const ForwardRef = forwardRef(SvgHr);
const Memo = memo(ForwardRef);
export default Memo;
