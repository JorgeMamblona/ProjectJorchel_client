const formatDate = date => {

    const day = date.getDate()
    const month = (date.getMonth() + 1)
    const year = date.getFullYear()
    const formatedDate = `${year}-${month}-${day}`

    return formatedDate
}


export { formatDate }
