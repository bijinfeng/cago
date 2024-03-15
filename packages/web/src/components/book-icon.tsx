import DocIcon from "@/assets/doc-type/default.svg?react"

export interface IBookIconProps extends React.SVGProps<SVGSVGElement> {
  book?: KB.BookInfo
}

export const BookIcon: React.FC<IBookIconProps> = ({ book, ...rest }) => {
  console.log(book)
  return (
    <DocIcon {...rest} />
  )
}
