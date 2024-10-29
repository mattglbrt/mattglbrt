// Get the relative time of two dates
export function getRelativeTime(startDate: Date, endDate = new Date()) {
  const diffSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000)
  if (diffSeconds < 0) {
    return null
  }
  const diffMinutes = Math.floor(diffSeconds / 60)
  if (diffMinutes < 10) {
    return 'just'
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`
  }
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) {
    return `${diffHours} hours ago`
  }
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 10) {
    return `${diffDays} days ago`
  }
  return null
}
export function getFormattedDate(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // Month (1-based)
  const day = date.getDate() // Day of the month
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
    date.getDay()
  ] // Day of the week

  return `${month}/${day}/${year} ${week}`
}
function padZero(number: number, len = 2) {
  return number.toString().padStart(len, '0')
}
export function getFormattedDateTime(date: Date) {
  const year = date.getFullYear()
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())
  const hours = padZero(date.getHours())
  const minutes = padZero(date.getMinutes())

  return `${month}/${day}/${year} ${hours}:${minutes}`
}
export function getDiffInDays(startDate: Date, endDate = new Date()) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 86400)) // 86400 seconds in a day
}
export function getShortDate(date: Date) {
  const month = padZero(date.getMonth() + 1)
  const day = padZero(date.getDate())

  return `${month}-${day}`
}
export function getDaysInYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366 // Leap year
  }
  return 365
}
export function getStartOfYear(date: Date) {
  const year = date.getFullYear()
  return new Date(year, 0, 1) // January 1st of the year
}
export function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()) // 00:00 of the same day
}
