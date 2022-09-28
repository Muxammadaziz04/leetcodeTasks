function lengthOfLongestSubstring(string) {
    let max = 0; 
    let current_string = ""; 
    let char = null;
    let pos = null;
    
    for (i = 0; i < string.length; i += 1) {
        char = string.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb'))