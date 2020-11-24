/*create phone number*/
/**
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
**/

// My solution:
function createPhoneNumber(arr) {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join('')}-${arr.slice(6).join('')}`;
}

/*Your order, please*/
/**
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples:

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

**/
// My Solution:
const order = (words) => {
    let reg = /\d/;
    return words.split(' ').sort((a,b) => a.match(reg) - b.match(reg)).join(' ')
}

/*Square Every Digit*/
/**
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integerㅡ
**/

// My Solution:
const squareDigits = (num) => {
    let numString = num.toString(), result = [];
    
    for(var i = 0; i < numString.length; i++) {
        result[i] = Math.pow(numString[i], 2);
    }
  
    return Number(result.join(''));
}
