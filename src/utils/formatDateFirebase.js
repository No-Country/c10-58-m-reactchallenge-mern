export function dateToSeconds (date, hour) {
  const hourChecked = hour < 10 ? `0${hour}` : hour
  const dateString = `${date}T${hourChecked}:00:00`
  const ISODate = new Date(dateString)
  const seconds = Date.parse(ISODate) / 1000
  return seconds
}
