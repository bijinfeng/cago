import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgUndo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    ref={ref}
    {...props}
  >
    <defs>
      <path id="undo_svg__a" d="M0 0h256v256H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="undo_svg__b" fill="#fff">
        <use xlinkHref="#undo_svg__a" />
      </mask>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="m80.394 114.922.225.19c4.063 3.54 4.597 9.693 1.154 13.885-3.505 4.268-9.807 4.885-14.074 1.38l-41.17-33.818-.275-.23c-7.433-6.353-8.443-17.516-2.209-25.105a18 18 0 0 1 2.484-2.484l41.17-33.818.23-.184c4.262-3.298 10.401-2.627 13.844 1.564l.184.23c3.299 4.262 2.628 10.402-1.563 13.845l-23.89 19.622L158.736 70c47.403 0 79.51 30.302 79.51 72 0 41.281-31.468 71.393-78.092 71.99l-1.418.01h-48.639c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996l.28-.004h48.64c36.607 0 59.51-21.615 59.51-52 0-30.081-22.447-51.567-58.417-51.994L158.736 90H50.052z"
        mask="url(#undo_svg__b)"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgUndo);
const Memo = memo(ForwardRef);
export default Memo;
