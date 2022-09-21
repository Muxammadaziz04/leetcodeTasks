let romanToInt = (s) => {
    const romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    
    const arr = Array.from(s)
    let currentNum = arr[0]
    let result = 0

    for(let i = 0; i < arr.length; i++) {
        const num = arr[i]
        if(
            (num === 'I' && (arr[i+1] === 'X' || arr[i+1] === 'V')) ||
            (num === 'X' && (arr[i+1] === 'L' || arr[i+1] === 'C')) ||
            (num === 'C' && (arr[i+1] === 'D' || arr[i+1] === 'M'))
        ){
            arr[i] = num + arr[i+1]
            arr.splice(i + 1, 1)
        } else if(num === currentNum && i !== 0) {
            arr[i - 1] = arr[i - 1] + num 
            arr.splice(i, 1)
            i--
        }
        
        if(num !== currentNum) {
            let currentRomanNum = arr[i - 1]
            arr[i - 1] = romanNums[currentRomanNum] || currentRomanNum?.length * romanNums[currentRomanNum && currentRomanNum[0]]
            currentNum = num
        }
    }
    arr[arr.length - 1] = romanNums[arr.at(-1)] || arr.at(-1).length * romanNums[arr.at(-1)[0]]
    arr.forEach((num) => {
        result += num
    })
    return result
};

console.log(romanToInt('CXXIV'));