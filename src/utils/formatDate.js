const formatDate = date => {

    const toDate = new Date(date)

    let day = toDate.getDate()
    day < 10 ? day = '0' + day : day
    const month = (toDate.getMonth() + 1)
    const year = toDate.getFullYear()
    const formatedDate = `${year}-${month}-${day}`

    return formatedDate
}


export { formatDate }
