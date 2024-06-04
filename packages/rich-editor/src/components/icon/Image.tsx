import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgImage = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <g transform="translate(5.167 7)">
        <path
          fill="#EFF0F0"
          d="m.901 21.103 5.208-7.217a1 1 0 0 1 1.517-.123l2.488 2.48a1 1 0 0 0 1.513-.118l3.384-4.634a1 1 0 0 1 1.515-.117l8.014 8.015a1 1 0 0 1 .293.707v.46a.874.874 0 0 1-.874.873H.95a.116.116 0 0 1-.116-.116.36.36 0 0 1 .068-.21Z"
        />
        <path
          stroke="#BEC0BF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.908 11c1.905 3.716-.427 4.902 0 6.571.49 1.911 3.578 2.237 3.96 3.858"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          d="M1.788 18.631q1.045-1.938 4.321-5.745a1 1 0 0 1 1.517-.123q1.937 2.902 3.207 2.753c.587-.07 1.218-1.17 2.33-2.753.491-.7 1.309-1.78 1.848-2.272s.952-.543 1.398-.218a1 1 0 0 1 .117.1q4.04 4.158 5.6 4.87"
        />
        <rect width={24.667} height={21} x={0.5} y={0.5} stroke="currentColor" rx={2} />
      </g>
      <circle cx={13.5} cy={13.5} r={2.5} fill="#00B96B" />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgImage);
const Memo = memo(ForwardRef);
export default Memo;
