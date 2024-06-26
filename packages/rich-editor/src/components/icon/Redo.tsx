import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgRedo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path id="redo_svg__a" d="M0 0h256v256H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="redo_svg__b" fill="#fff">
        <use xlinkHref="#redo_svg__a" />
      </mask>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="m177.807 114.922-.225.19c-4.064 3.54-4.598 9.693-1.155 13.885 3.443 4.191 9.583 4.862 13.844 1.564l.23-.184 41.17-33.818.275-.23c7.433-6.353 8.443-17.516 2.21-25.105a18 18 0 0 0-2.1-2.159l-.384-.325-41.17-33.818-.23-.184a10 10 0 0 0-13.655 1.339l-.19.225-.184.23a10 10 0 0 0 1.339 13.654l.225.19L201.697 70H99.464c-47.402 0-79.51 30.302-79.51 72 0 41.281 31.469 71.393 78.093 71.99l1.417.01h48.64c5.522 0 10-4.477 10-10 0-5.43-4.328-9.848-9.721-9.996l-.28-.004H99.464c-36.607 0-59.51-21.615-59.51-52 0-30.081 22.447-51.567 58.416-51.994L99.464 90H208.15l-30.342 24.922Z"
        mask="url(#redo_svg__b)"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgRedo);
const Memo = memo(ForwardRef);
export default Memo;
