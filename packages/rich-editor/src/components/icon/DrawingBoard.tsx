import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgDrawingBoard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <rect width={25} height={23} x={5.5} y={6.5} fill="#FFF" stroke="currentColor" rx={2} />
      <rect width={7} height={7} x={19.5} y={10.187} fill="#C7F0DF" stroke="#00B96B" rx={2} />
      <circle cx={12} cy={22} r={3.5} fill="#EFF0F0" stroke="#8A8F8D" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M25.777 22.8q-6.28.76-8.516.317"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m23.316 20.358 2.882 2.443-2.882 2.44m-12.553-9.635q.9-2.017 2.37-2.763 1.469-.744 3.597-.563"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgDrawingBoard);
const Memo = memo(ForwardRef);
export default Memo;
