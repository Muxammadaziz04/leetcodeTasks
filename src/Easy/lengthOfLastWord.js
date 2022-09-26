const lengthOfLastWord = (s) => {
    return s.trim().split(' ').at(-1).length
};

console.log(lengthOfLastWord("Hello World"));