import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgStatus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path
        fill="#E7E9E8"
        stroke="currentColor"
        strokeLinejoin="round"
        d="m14.74 7.595-3.984 4.87a2 2 0 0 0-.438 1.472q.793 7.6 1.275 10.332.348 1.977.916 3.848a1.997 1.997 0 0 0 2.26 1.388l10.01-1.765a2 2 0 0 0 1.586-2.467 119 119 0 0 1-.883-3.69q-.636-2.858-1.298-8.807a2 2 0 0 0-.836-1.413l-5.913-4.14a2 2 0 0 0-2.695.372Z"
      />
      <path
        fill="#FFF"
        stroke="currentColor"
        d="M17.078 11.29c.414 0 .79.168 1.06.44a1.495 1.495 0 0 1 0 2.121c-.27.271-.646.439-1.06.439a1.5 1.5 0 0 1-1.06-.44 1.5 1.5 0 0 1-.44-1.06c0-.414.168-.79.44-1.06a1.5 1.5 0 0 1 1.06-.44Z"
      />
      <path
        fill="#00B96B"
        d="M11.955 24.155q5.235-.252 7.469-.67 2.234-.42 5.713-1.645l.573 2.467q-3.712 1.08-6.286 1.493t-6.988.591z"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgStatus);
const Memo = memo(ForwardRef);
export default Memo;
