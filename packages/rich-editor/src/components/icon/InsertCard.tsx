import * as React from 'react';
import type { SVGProps , Ref} from 'react';
import { forwardRef, memo } from 'react';
const SvgInsertCard = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 18 18" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M9 .25a8.75 8.75 0 1 0 .001 17.501A8.75 8.75 0 0 0 9 .25m3.75 9.219c0 .086-.07.156-.156.156H9.625v2.969c0 .086-.07.156-.156.156H8.53a.157.157 0 0 1-.156-.156V9.625H5.406a.157.157 0 0 1-.156-.156V8.53c0-.086.07-.156.156-.156h2.969V5.406c0-.086.07-.156.156-.156h.938c.086 0 .156.07.156.156v2.969h2.969c.086 0 .156.07.156.156z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInsertCard);
const Memo = memo(ForwardRef);
export default Memo;
