let l1 = [2,4,3]
let l2 = [5,6,4]

const addTwoNumbers = (l1 = [], l2 = []) => {
    if(!l1.length || !l2.length) return l1.concat(l2)
    return Array.from((+l1.reverse().join('') + +l2.reverse().join('')).toString()).reverse()
};

console.log(addTwoNumbers(l1, l2));