import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgFormatPainter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path id="format-painter_svg__a" d="M0 0h256v256H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="format-painter_svg__b" fill="#fff">
        <use xlinkHref="#format-painter_svg__a" />
      </mask>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M213 77c0 14.36-11.64 26-26 26H69c-14.36 0-26-11.64-26-26V51c0-14.36 11.64-26 26-26h118c14.36 0 26 11.64 26 26v2h9.125c9.83 0 17.82 7.88 17.997 17.67l.003.33v50c0 9.83-7.88 17.82-17.67 17.997l-.33.003h-84.626v18H139c9.83 0 17.82 7.88 17.997 17.67l.003.33v35c0 16.016-12.984 29-29 29-15.856 0-28.74-12.725-28.996-28.52L99 210v-35c0-9.83 7.88-17.82 17.67-17.997L117 157h.499l.001-20c0-9.83 7.88-17.82 17.67-17.997l.33-.003h84.625V73H213Zm-76 100h-18v33a9 9 0 0 0 8.471 8.985l.264.011.265.004a9 9 0 0 0 8.996-8.735L137 210zm50-132H69a6 6 0 0 0-6 6v26a6 6 0 0 0 6 6h118a6 6 0 0 0 6-6V51a6 6 0 0 0-6-6"
        mask="url(#format-painter_svg__b)"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgFormatPainter);
const Memo = memo(ForwardRef);
export default Memo;
