const searchQuerys = (arr, str) => {
    let finalArr = [];
    str = str.toLowerCase();

    arr.forEach(item => {
        if(item.name.toLowerCase().includes(str)) {
            finalArr.push(item)
        } else if(item.year.toString().includes(str)) {
            finalArr.push(item)
        } else if(item.director.toLowerCase().includes(str)) {
            finalArr.push(item)
        } else if(item.cast.some(actor => actor.toLowerCase().includes(str))) {
            finalArr.push(item)
        }
    })

    return finalArr
}

export default searchQuerys