import { cva } from "class-variance-authority"
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Baseline,
  Bold,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Code2,
  Combine,
  Edit2,
  ExternalLink,
  Eye,
  FileCode,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Indent,
  Italic,
  Keyboard,
  Link2,
  Link2Off,
  List,
  ListOrdered,
  MessageSquare,
  MessageSquarePlus,
  Minus,
  Moon,
  MoreHorizontal,
  Outdent,
  PaintBucket,
  Pilcrow,
  Plus,
  Quote,
  RectangleHorizontal,
  RectangleVertical,
  Redo2,
  RotateCcw,
  Search,
  Settings,
  Smile,
  Strikethrough,
  Subscript,
  SunMedium,
  Superscript,
  Table,
  Text,
  Trash,
  Twitter,
  Underline,
  Undo2,
  Ungroup,
  WrapText,
  X,
} from "lucide-react"

import type { LucideIcon, LucideProps } from "lucide-react"

export type Icon = LucideIcon

function borderAll(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6zm10 13h5a1 1 0 0 0 1-1v-5h-6v6zm-2-6H5v5a1 1 0 0 0 1 1h5v-6zm2-2h6V6a1 1 0 0 0-1-1h-5v6zm-2-6H6a1 1 0 0 0-1 1v5h6V5z" />
    </svg>
  )
}

function borderBottom(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm-2 7a1 1 0 1 1 2 0 1 1 0 0 0 1 1h12a1 1 0 0 0 1-1 1 1 0 1 1 2 0 3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm17-8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1zM7 4a1 1 0 0 0-1-1 3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 1-1zm11-1a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function borderLeft(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 21a1 1 0 1 0 0-2 1 1 0 0 1-1-1V6a1 1 0 0 1 1-1 1 1 0 0 0 0-2 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3zm7-16a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm6 6a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-5 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm4-17a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zm-1 17a1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 0 0-1 1z" />
    </svg>
  )
}

function borderNone(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 4a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm-9 7a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-6 10a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zM7 4a1 1 0 0 0-1-1 3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1 1 1 0 0 0 1-1zm11-1a1 1 0 1 0 0 2 1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zM7 20a1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1zm11 1a1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 1 1 2 0 3 3 0 0 1-3 3z" />
    </svg>
  )
}

function borderRight(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 5a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2zm-8 6a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm9 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zM6 3a1 1 0 0 1 0 2 1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3zm1 17a1 1 0 0 1-1 1 3 3 0 0 1-3-3 1 1 0 1 1 2 0 1 1 0 0 0 1 1 1 1 0 0 1 1 1zm11 1a1 1 0 1 1 0-2 1 1 0 0 0 1-1V6a1 1 0 0 0-1-1 1 1 0 1 1 0-2 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3z" />
    </svg>
  )
}

function borderTop(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      height="48"
      width="48"
      focusable="false"
      role="img"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3 6a1 1 0 0 0 2 0 1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3zm2 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2zm-5 9a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1zm-8 1a1 1 0 1 0 0-2 1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3zm11-1a1 1 0 0 0 1 1 3 3 0 0 0 3-3 1 1 0 1 0-2 0 1 1 0 0 1-1 1 1 1 0 0 0-1 1z" />
    </svg>
  )
}

function arrowDown(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <script />
      <title>{"icon/\u4E0B\u62C9"}</title>
      <defs>
        <path id="a" d="M0 0h256v256H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="#8C8C8C"
          fillRule="nonzero"
          d="M181.1 118.925 135 165.096a9.889 9.889 0 0 1-14 0l-46.1-46.17c-3.866-3.873-3.866-10.15 0-14.022a9.892 9.892 0 0 1 7-2.904h92.2c5.468 0 9.9 4.439 9.9 9.915a9.922 9.922 0 0 1-2.9 7.01Z"
          mask="url(#b)"
        />
      </g>
      <script />
    </svg>
  )
}

export const Icons = {
  add: Plus,
  alignCenter: AlignCenter,
  alignJustify: AlignJustify,
  alignLeft: AlignLeft,
  alignRight: AlignRight,
  arrowDown,
  bg: PaintBucket,
  blockquote: Quote,
  bold: Bold,
  borderAll,
  borderBottom,
  borderLeft,
  borderNone,
  borderRight,
  borderTop,
  check: Check,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  chevronsUpDown: ChevronsUpDown,
  clear: X,
  close: X,
  code: Code2,
  codeblock: FileCode,
  color: Baseline,
  column: RectangleVertical,
  combine: Combine,
  ungroup: Ungroup,
  comment: MessageSquare,
  commentAdd: MessageSquarePlus,
  delete: Trash,
  dragHandle: GripVertical,
  editing: Edit2,
  emoji: Smile,
  externalLink: ExternalLink,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  image: Image,
  indent: Indent,
  italic: Italic,
  kbd: Keyboard,
  lineHeight: WrapText,
  link: Link2,
  minus: Minus,
  more: MoreHorizontal,
  ol: ListOrdered,
  outdent: Outdent,
  paragraph: Pilcrow,
  refresh: RotateCcw,
  row: RectangleHorizontal,
  search: Search,
  settings: Settings,
  strikethrough: Strikethrough,
  subscript: Subscript,
  superscript: Superscript,
  table: Table,
  text: Text,
  trash: Trash,
  ul: List,
  underline: Underline,
  unlink: Link2Off,
  viewing: Eye,
  undo: Undo2,
  redo: Redo2,

  // www
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      >
      </path>
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  moon: Moon,
  sun: SunMedium,
  twitter: Twitter,
  fontColor: ({ size, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 240 240"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#DF2A3F"
          d="M50 219h156c6.075 0 11 4.925 11 11s-4.925 11-11 11H50c-6.075 0-11-4.925-11-11s4.925-11 11-11Z"
        />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M111.343 34.683c3.456-9.32 13.815-14.074 23.136-10.617a18 18 0 0 1 10.49 10.284l.144.378 53.272 144.82c1.907 5.183-.75 10.93-5.933 12.837-5.094 1.874-10.732-.66-12.735-5.667l-.102-.266L128.21 46.714 76.376 186.477c-1.887 5.09-7.478 7.728-12.585 5.994l-.268-.095c-5.09-1.887-7.728-7.478-5.994-12.585l.095-.268 53.719-144.84Z"
        />
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M160 121c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L160 141H94c-5.523 0-10-4.477-10-10 0-5.43 4.327-9.848 9.72-9.996L94 121h66Z"
        />
      </g>
    </svg>
  ),
  bgColor: ({ size, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g fill="currentColor">
          <path
            fillRule="nonzero"
            d="m66.64 149.097 40.446 40.446c4.57 4.57 11.977 4.57 16.546 0l32.669-32.668c4.569-4.57 4.569-11.977 0-16.546l-40.447-40.447c-4.569-4.57-11.977-4.57-16.546 0L66.64 132.55c-4.57 4.57-4.57 11.978 0 16.547Zm18.597-8.272 22.344-22.345 30.123 30.123-22.344 22.344-30.123-30.122Z"
          />
          <path d="m44.798 189.338 36.28-36.256a2.202 2.202 0 0 1 3.112 0l20.348 20.348a2.2 2.2 0 0 1 0 3.112l-20.32 20.32a8.8 8.8 0 0 1-5.865 2.57l-28.62 1.169a6.6 6.6 0 0 1-4.935-11.263Z" />
          <path
            fillRule="nonzero"
            d="m80.838 91.973 84.57 84.57c4.57 4.569 11.977 4.569 16.546 0l54.872-54.872c4.569-4.57 4.569-11.977 0-16.546l-84.57-84.57c-4.57-4.57-11.977-4.57-16.546 0L80.838 75.426c-4.569 4.57-4.569 11.977 0 16.547ZM99.435 83.7l44.548-44.548 74.246 74.246-44.548 44.548L99.435 83.7Z"
          />
        </g>
        <path
          fill="#FBDE28"
          d="M51 218h154c6.075 0 11 4.925 11 11s-4.925 11-11 11H51c-6.075 0-11-4.925-11-11s4.925-11 11-11Z"
        />
      </g>
    </svg>
  ),
}

export const iconVariants = cva("", {
  variants: {
    variant: {
      toolbar: "size-5",
      menuItem: "mr-2 size-5",
    },
    size: {
      sm: "mr-2 size-4",
      md: "mr-2 size-6",
    },
  },
  defaultVariants: {},
})
