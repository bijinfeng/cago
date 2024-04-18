import { Popover, PopoverContent, PopoverTrigger, Separator, cn } from "@pingtou/ui"
import Color from "color"
import { Check } from "lucide-react"
import { isEmpty, unique } from "radash"
import { SketchPicker } from "react-color"
import { useLocalStorage } from "react-use"
import { Icons } from "@/components/common/icons"

const grayColors = [
  {
    color: "rgb(0, 0, 0)",
    title: "黑色",
  },
  {
    color: "rgb(38, 38, 38)",
    title: "深灰 3",
  },
  {
    color: "rgb(88, 90, 90)",
    title: "深灰 2",
  },
  {
    color: "rgb(138, 143, 141)",
    title: "深灰 1",
  },
  {
    color: "rgb(216, 218, 217)",
    title: "灰色",
  },
  {
    color: "rgb(231, 233, 232)",
    title: "浅灰 4",
  },
  {
    color: "rgb(239, 240, 240)",
    title: "浅灰 3",
  },
  {
    color: "rgb(244, 245, 245)",
    title: "浅灰 2",
  },
  {
    color: "rgb(250, 250, 250)",
    title: "浅灰 1",
    border: true,
  },
  {
    color: "rgb(255, 255, 255)",
    title: "白色",
    border: true,
  },
]

const defaultColors = [
  { title: "红色", color: "rgb(223, 42, 63)" },
  { title: "橘橙", color: "rgb(237, 116, 12)" },
  { title: "金盏黄", color: "rgb(236, 170, 4)" },
  { title: "柠檬黄", color: "rgb(251, 222, 40)" },
  { title: "绿色", color: "rgb(116, 182, 2)" },
  { title: "青色", color: "rgb(29, 192, 201)" },
  { title: "浅蓝", color: "rgb(17, 124, 238)" },
  { title: "蓝色", color: "rgb(47, 75, 218)" },
  { title: "紫色", color: "rgb(96, 27, 222)" },
  { title: "玫红", color: "rgb(210, 45, 141)" },
  { title: "红色 1", color: "rgb(251, 228, 231)" },
  { title: "橘橙 1", color: "rgb(253, 230, 211)" },
  { title: "金盏黄 1", color: "rgb(249, 239, 205)" },
  { title: "柠檬黄 1", color: "rgb(251, 245, 203)" },
  { title: "绿色 1", color: "rgb(232, 247, 207)" },
  { title: "青色 1", color: "rgb(206, 245, 247)" },
  { title: "浅蓝 1", color: "rgb(217, 234, 252)" },
  { title: "蓝色 1", color: "rgb(217, 223, 252)" },
  { title: "紫色 1", color: "rgb(230, 220, 249)" },
  { title: "玫红 1", color: "rgb(251, 223, 239)" },
  { title: "红色 2", color: "rgb(241, 162, 171)" },
  { title: "橘橙 2", color: "rgb(248, 184, 129)" },
  { title: "金盏黄 2", color: "rgb(245, 212, 128)" },
  { title: "柠檬黄 2", color: "rgb(252, 231, 90)" },
  { title: "绿色 2", color: "rgb(193, 231, 126)" },
  { title: "青色 2", color: "rgb(129, 223, 228)" },
  { title: "浅蓝 2", color: "rgb(129, 187, 248)" },
  { title: "蓝色 2", color: "rgb(150, 167, 253)" },
  { title: "紫色 2", color: "rgb(186, 155, 242)" },
  { title: "玫红 2", color: "rgb(242, 151, 204)" },
  { title: "红色 3", color: "rgb(228, 73, 91)" },
  { title: "橘橙 3", color: "rgb(243, 143, 57)" },
  { title: "金盏黄 3", color: "rgb(243, 187, 47)" },
  { title: "柠檬黄 3", color: "rgb(237, 206, 2)" },
  { title: "绿色 3", color: "rgb(140, 207, 23)" },
  { title: "青色 3", color: "rgb(1, 178, 188)" },
  { title: "浅蓝 3", color: "rgb(47, 142, 244)" },
  { title: "蓝色 3", color: "rgb(72, 97, 224)" },
  { title: "紫色 3", color: "rgb(126, 69, 232)" },
  { title: "玫红 3", color: "rgb(231, 70, 164)" },
  { title: "红色 4", color: "rgb(173, 26, 43)" },
  { title: "橘橙 4", color: "rgb(199, 92, 0)" },
  { title: "金盏黄 4", color: "rgb(201, 145, 3)" },
  { title: "柠檬黄 4", color: "rgb(165, 143, 4)" },
  { title: "绿色 4", color: "rgb(92, 141, 7)" },
  { title: "青色 4", color: "rgb(7, 120, 126)" },
  { title: "浅蓝 4", color: "rgb(12, 104, 202)" },
  { title: "蓝色 4", color: "rgb(33, 59, 192)" },
  { title: "紫色 4", color: "rgb(76, 22, 177)" },
  { title: "玫红 4", color: "rgb(174, 20, 110)" },
  { title: "红色 5", color: "rgb(112, 0, 13)" },
  { title: "橘橙 5", color: "rgb(102, 48, 0)" },
  { title: "金盏黄 5", color: "rgb(102, 73, 0)" },
  { title: "柠檬黄 5", color: "rgb(102, 88, 0)" },
  { title: "绿色 5", color: "rgb(42, 66, 0)" },
  { title: "青色 5", color: "rgb(0, 67, 71)" },
  { title: "浅蓝 5", color: "rgb(0, 52, 107)" },
  { title: "蓝色 5", color: "rgb(16, 30, 96)" },
  { title: "紫色 5", color: "rgb(39, 0, 112)" },
  { title: "玫红 5", color: "rgb(92, 0, 54)" },
]

const defaultColor = "rgb(38, 38, 38)"

interface IColorLatticeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string
  checked?: boolean
  border?: boolean
  special?: boolean
}

function ColorLattice({ color, checked, border, className, special, ...rest }: IColorLatticeProps) {
  const isLight = Color(color).isLight()

  return (
    <div
      className={cn(
        "border p-0.5 border-transparent rounded-[3px] hover:border-gray-300 hover:shadow-sm cursor-pointer",
        special && "relative after:absolute after:top-[10px] after:left-0 after:w-[22px] after:border after:-rotate-45 after:border-red-300",
        className,
      )}
      {...rest}
    >
      <div style={{ backgroundColor: color }} className={cn("box-content w-4 h-4 border flex items-center justify-center rounded-sm", border ? "border-secondary" : "border-transparent")}>
        {checked && <Check size={12} color={isLight ? "black" : "white"} />}
      </div>
    </div>
  )
}

interface IColorPickerProps {
  value?: string
  hasDefault?: boolean
  hasClear?: boolean
  onChange?: (color: string) => void
  onUpdate?: (color: string) => void
  onClear?: () => void
}

export const ColorPicker: React.FC<IColorPickerProps> = (props) => {
  const { value, hasDefault, hasClear, onChange, onUpdate, onClear } = props
  const [reusedColor, setReusedColor] = useLocalStorage<string[]>("plate-reused-colors")

  const handleChange = (color: string, isUpdate = false) => {
    isUpdate ? onUpdate?.(color) : onChange?.(color)

    const nextReusedColor = reusedColor ? [color, ...reusedColor] : [color]
    setReusedColor(unique(nextReusedColor).slice(0, 6))
  }

  return (
    <>
      {hasDefault && (
        <div
          className="flex items-center px-2 py-2 hover:bg-secondary cursor-pointer mb-2 mt-1"
          onClick={() => handleChange(defaultColor)}
        >
          <ColorLattice color={defaultColor} />
          <span className="ml-2 text-sm text-secondary-foreground">默认</span>
        </div>
      )}
      {hasClear && (
        <div
          className="flex items-center px-2 py-2 hover:bg-secondary cursor-pointer mb-2 mt-1"
          onClick={onClear}
        >
          <ColorLattice color="transparent" special border />
          <span className="ml-2 text-sm text-secondary-foreground">无填充色</span>
        </div>
      )}

      <div className="grid grid-cols-10 px-2 mb-1.5">
        {grayColors.map(item => (
          <ColorLattice
            checked={value === item.color}
            key={item.color}
            onClick={() => handleChange(item.color)}
            {...item}
          />
        ))}
      </div>
      <div className="grid grid-cols-10 px-2">
        {defaultColors.map(item => (
          <ColorLattice
            checked={value === item.color}
            key={item.color}
            onClick={() => handleChange(item.color)}
            {...item}
          />
        ))}
      </div>

      <div className="px-2 py-1.5 mt-2 text-sm text-secondary-foreground">最近使用的自定义颜色</div>
      {isEmpty(reusedColor)
        ? (
          <div className="px-2 text-sm py-0.5 text-muted-foreground">暂无</div>
          )
        : (
          <div className="grid grid-cols-10 px-2">
            {reusedColor?.map(color => <ColorLattice key={color} color={color} />)}
          </div>
          )}

      <Separator className="mt-[10px]" />
      <Popover>
        <PopoverTrigger asChild>
          <div className="py-3 px-2 hover:bg-secondary cursor-pointer flex items-center">
            <img width={17} height={17} src="data:image/png;base64,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 NDQrMDA6MDASCNz+AAAAAElFTkSuQmCC" alt="" />
            <span className="flex-1 ml-2 text-sm text-secondary-foreground">更多颜色</span>
            <Icons.arrowDown size={14} className="-rotate-90 text-secondary-foreground" />
          </div>
        </PopoverTrigger>
        <PopoverContent align="end" side="right" className="p-3 w-60">
          <SketchPicker
            className="!w-auto !p-0 !shadow-none !bg-transparent border-none"
            presetColors={[]}
            color={value}
            onChangeComplete={color => handleChange(color.hex, true)}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}
