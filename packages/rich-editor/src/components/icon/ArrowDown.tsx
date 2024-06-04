import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path id="arrow-down_svg__a" d="M0 0h256v256H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="arrow-down_svg__b" fill="#fff">
        <use xlinkHref="#arrow-down_svg__a" />
      </mask>
      <path
        fill="#8C8C8C"
        fillRule="nonzero"
        d="M181.1 118.925 135 165.096a9.89 9.89 0 0 1-14 0l-46.1-46.17c-3.866-3.873-3.866-10.15 0-14.022a9.9 9.9 0 0 1 7-2.904h92.2c5.468 0 9.9 4.439 9.9 9.915a9.92 9.92 0 0 1-2.9 7.01"
        mask="url(#arrow-down_svg__b)"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgArrowDown);
const Memo = memo(ForwardRef);
export default Memo;
