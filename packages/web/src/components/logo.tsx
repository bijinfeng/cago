import { Link } from "react-router-dom"
import LogoIcon from "@/assets/logo.svg?react"

interface ILogoProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export const Logo: React.FC<ILogoProps> = ({ size = 16, className, style }) => {
  return (
    <Link to="/dashboard" className={className} style={style}>
      <LogoIcon width={size} height={size} className="text-primary" />
    </Link>
  )
}
