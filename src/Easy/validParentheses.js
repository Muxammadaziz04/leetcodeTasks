const isValid = function(s) {
    let arr = Array.from(s)
    const paterns = [['(', ')'], ['[', ']'], ['{', '}']]
    let result = null

    if(arr.length % 2 !== 0) return false
    if(arr.length === 2) {
        result = arr.join('') === '()' || 
        arr.join('') === '[]' ||
        arr.join('') === '{}'
        ? true : false
    }
    
    arr = arr.flat()
    for(let i = 0; i < arr.length; i++){
        let newArr = []
        const scobe = paterns.findIndex(el => el[0] === arr[i])
        if(scobe > 0){
            const [_, secondScobe] = paterns[scobe]
            const second = arr.findIndex(el => secondScobe === el)
            if(arr.slice(i, second + 1).length > 2){
                newArr.push(arr.slice(i, second + 1))
                result = isValid(newArr)
                i = second
            } else if (arr.slice(i, second + 1).length === 2){
                result = arr.slice(i, second + 1).join('') === '()' || 
                arr.slice(i, second + 1).join('') === '[]' ||
                arr.slice(i, second + 1).join('') === '{}'
                ? true : false
            }

        }
    }
    
    return result
};

console.log(isValid('{[]}'));