const reverse = (num) => {
    let reverseNum = Math.abs(num).toString().split('').reverse().join('')
    return Number(num >= 0 ? reverseNum : -reverseNum)
}

console.log(reverse(1534236469));