import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

interface DateProps {
  dateString?: string
}

export default function Date({ dateString }: DateProps) {
  if (!dateString) {
    return <time dateTime="">日期未知</time>
  }
  
  try {
    const dateStr = String(dateString)
    const date = new (Date as any)(dateStr)
    
    // 检查是否是有效日期
    if (date.toString() === 'Invalid Date' || isNaN(date.valueOf())) {
      return <time dateTime="">日期格式错误</time>
    }
    
    return (
      <time dateTime={dateString}>
        {format(date, 'yyyy年MM月dd日', { locale: zhCN })}
      </time>
    )
  } catch (error) {
    return <time dateTime="">日期解析错误</time>
  }
}