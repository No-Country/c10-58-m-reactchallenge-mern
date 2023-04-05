export function formatDateFirebase (date) {
  const [day, month, year] = date.split('-')
  return `${day}-${month}-${year}`
}
