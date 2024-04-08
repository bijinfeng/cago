import { BOOK_ICON } from "@/lib/constants"

export interface IBookIconProps extends React.SVGProps<SVGSVGElement> {
  iconType?: KB.BookIconType
  size?: number
}

export const BookIcon: React.FC<IBookIconProps> = ({ iconType, size, width, height, ...rest }) => {
  const Icon = BOOK_ICON[iconType || "default"]

  return (
    <Icon {...rest} width={width || size} height={height || size} />
  )
}
