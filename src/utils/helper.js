export const convertTime = (time) => {
    const date = new Date(time)
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getDate()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const amOrPm = hours >= 12 ? 'PM' : 'AM'
    return `${month} ${day}, ${year} at ${hours}:${minutes} ${amOrPm}`
}
