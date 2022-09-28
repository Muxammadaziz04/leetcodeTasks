const longestPalindrome = (s) => {
    let max = 0;
    let current_string = '';
    let pos = null;
    let char = '';

    for (let i = 0; i < s.length; i++) {
        char = s.charAt(i)
        current_string += char
    }

    return max
};

console.log(longestPalindrome('babad'));