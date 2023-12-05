const formatHours = date => {
    const toDate = new Date(date)
    let hours = toDate.getHours()
    let minutes = toDate.getMinutes()
    return hours + ':' + minutes
}
export { formatHours }