// const convertDate = (d) =>
//   `${d.split('-')[2]}-${d.split('-')[1]}-${d.split('-')[0]}`

export function formatDateFirebase (date) {
  const [day, month, year] = date.split('-')
  return `${day}-${month}-${year}`
}
