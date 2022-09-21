let isPalindrome = function(x) {
    if(x < 0) return false
    return +Array.from(x.toString()).reverse().join('') === +x
};

console.log(isPalindrome(17));