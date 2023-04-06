export function dateToSeconds (date, hour) {
  const dateString = `${date}T${hour}:00:00`
  const ISODate = new Date(dateString)
  const seconds = Date.parse(ISODate) / 1000
  return seconds
}
