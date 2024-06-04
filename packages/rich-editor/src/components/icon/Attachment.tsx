import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgAttachment = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        fill="#BEC0BF"
        stroke="currentColor"
        strokeLinejoin="round"
        d="M14.748 8.25H8.314a2 2 0 0 0-2 1.93q-.25 7.143-.25 9.906 0 2.553.214 6.638a2 2 0 0 0 1.994 1.895h15.112l3.05-10.605 1.135-5.954a1 1 0 0 0-.983-1.187h-6.781a3 3 0 0 1-2.192-.952l-.672-.719a3 3 0 0 0-2.193-.952Z"
      />
      <path
        fill="#EFF0F0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.038 25.827q1.11-3.07 2.584-10.612c.226-.908 1.103-1.551 2.114-1.551q5.52-.227 7.792-.227h10.523c.599-.002 1.086.444 1.089.997a1 1 0 0 1-.014.163q-2.544 9.062-3.602 11.23c-1.059 2.168-2.053 2.792-4.715 2.792H8.038"
      />
      <path
        stroke="#00B96B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.84 23.588a9.5 9.5 0 0 0 1.209-1.426c.59-.84 1.027-2.642.206-3.727s-2.86-1.085-3.943-.435c-1.082.65-3.318 3.104-3.855 3.64-.536.537-.879 2.169-.056 2.965.823.797 2.45.402 3.349-.389.898-.79 1.869-1.972 2.298-2.4.428-.43.714-1.126.176-1.663s-1.198-.173-1.604.234l-2.494 2.494"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgAttachment);
const Memo = memo(ForwardRef);
export default Memo;
