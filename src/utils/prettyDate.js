const prettyDate = date => {
    let formatDate = date.slice(0, 10)
    formatDate = formatDate.split('-')

    return (`${formatDate[2]}-${formatDate[1]}-${formatDate[0]}`)
}

export { prettyDate }