// reverse a string
function reverseString(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}


console.log(reverseString('Hello World'))
// reverse string  using two pointer approach
function reverseStr(str) {
    let s = str.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }
    return s.join('');

}
console.log(reverseStr('Hello World'))


// reverse only letter on symbol using two pointer approach
function reverseOnlyLetters(str) {
    let s = str.split('');
    // Function to check if a character is a letter
    const isLetter = (char) => /[a-zA-Z]/.test(char);
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        // if left character is symbol then move pointer
        if (!isLetter(s[left])) {
            left++;
            // if right character is symbol then move pointer
        } else if (!isLetter(s[right])) {
            right--;
        } else {
            let temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }
    }
    return s.join('');

}
console.log(reverseOnlyLetters('ab-cd'))