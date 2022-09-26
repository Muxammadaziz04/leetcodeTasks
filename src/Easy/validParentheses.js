function isValid(brackets) {
    const bracketsVariants = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    const stack = [];
    for (let i = 0; i < brackets.length; i++) {
        console.log(brackets[i]);
        if (Object.keys(bracketsVariants).includes(brackets[i])) {
            stack.push(brackets[i]);
            continue;
        } else if (brackets[i] === bracketsVariants[stack.at(-1)]) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0;
}

console.log(isValid(')'));