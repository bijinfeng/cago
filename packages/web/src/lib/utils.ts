import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(localizedFormat)

// 格式化时间
export function formatDate(date: string | number | Date) {
  // 获取当前时间
  const now = dayjs()
  const customDate = dayjs(date)
  // 计算当前时间和要格式化的时间的差距
  const diffInDays = customDate.diff(now, "day")
  const diffInYears = customDate.diff(now, "year")

  // 根据差距选择不同的格式化方式
  let formattedTime
  if (diffInDays === 0)
    formattedTime = customDate.format("今天 HH:mm")
  else if (diffInDays === 1)
    formattedTime = customDate.format("昨天 HH:mm")
  else if (diffInYears === 0)
    formattedTime = customDate.format("MM-DD HH:mm")
  else
    formattedTime = customDate.format("YYYY-MM-DD")

  return formattedTime
}
