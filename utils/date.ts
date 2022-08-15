import { zeroPadding } from './string'

const monthEn = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const getLastDayOfMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0)

export const getDateText = (date: Date, isSlush?: boolean) => {
  return `${zeroPadding(date.getMonth() + 1, 2)}${
    isSlush ? '/' : ''
  }${zeroPadding(date.getDate(), 2)}`
}

export const getMonthText = (date: Date) => {
  return `${zeroPadding(date.getFullYear(), 2)}-${zeroPadding(
    date.getMonth() + 1,
    2
  )}`
}

export const getTimeText = (date: Date, isColon?: boolean) => {
  return `${zeroPadding(date.getHours(), 2)}${isColon ? ':' : ''}${zeroPadding(
    date.getMinutes(),
    2
  )}`
}

export const getMonthDayList = (
  year: number,
  month: number // from 1 to 12
) => {
  const lastDate = new Date(year, month, 0)
  const dates: Date[] = [...Array(lastDate.getDate())].map(
    (_, index) => new Date(year, month - 1, index + 1)
  )
  return dates
}

export const getMonthWeekList = (
  year: number,
  month: number // from 1 to 12
) => {
  const dates: Date[] = getMonthDayList(year, month)
  const weeks: [Date[]] = [[]]
  dates.forEach((d, i) => {
    if (i !== 0 && d.getDay() === 0) {
      weeks.push([])
    }
    weeks[weeks.length - 1].push(d)
  })
  return weeks
}

export const getMonthEngName = (date: Date) => {
  const month = date.getMonth()
  if (month < 0 || month > 11) return ''
  return monthEn[month]
}
