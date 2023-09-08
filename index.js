// Write a pseudocode for this problem statement:
// START
// DEFINE SET OF VOWELS
// CONVERT STRING TO LOWER CASE
// FUNCTION IF CHARACTER IS IN VOWELS RETURN TRUE, ELSE FALSE
// END

// Given a string, write code that returns true or false depending on whether it contains any vowels. Vowel characters are "a", "i", "u", "e", "o". The string might be a mix of capital letters.

function containsVowel(inputString) {
    const vowels = new Set(["a", "i", "u", "e", "o"]);
    inputString = inputString.toLowerCase();

    for (let i = 0; i < inputString.length; i++) {
        if(vowels.has(inputString[i])) {
            return true
        }
    }
    return false;

}

// console.log(containsVowel("revou"));  
// console.log(containsVowel("cAt"));    
// console.log(containsVowel("bzzr")); 

// Write a pseudocode for this problem statement:
// START
// BINGUNG KA YG INI??
// > Given an array of numbers. Please return the duplicates in another array, If there are no duplicates, return an empty string

Example:

Input: `[1,2,4,2,5,1]`
Output: `[1,2]`

Input: `[2,5,7,3,5,8]`
Output: `[]`


// HOME PRACTICE
// 1. Write a function that takes in an array of numbers and returns the sum.
// > Input: `[1,2,3,4,5]`
// > Output: `15`

// start
// input number
// declare the num to 0
// loop from 1 til n
// sum the numbers before
// return
// end
                                   
function calculateSum(...numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
  
    return sum                    
  }                                
// console.log(calculateSum(1,2,3,4,5))

// 2. Given two strings as arguments to your function return true if they are the same or false otherwise.
// > Input: `kuda`, `KuDa`
// > Output: `true`

function checkStringsEqual(str1, str2) {

    return str1.toLowerCase() === str2.toLowerCase();
}


// const string1 = "kuda";
// const string2 = "KuDa";
// const result = checkStringsEqual(string1, string2);
// console.log(result);  




// 3. Create a function that will reverse any string passed into it
// > Input:`“hello”`
// > Output: `“olleh”`
function reverseString(inputString) {
     let reversedString = "";
    
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    
    return reversedString;
}


// const input = "Hello";
// const reversed = reverseString(input);
// console.log(reversed);



// 4. Create a function that accepts three parameters (a number, b number , c number) and prints out all combinations of those.
// > Input: `1`, `2`, `3`
// > Ouput: `[123, 132, 213, 231, 312, 321]`

// 5. Create a function that accepts 2 integers (a & b) and prints out all whole numbers between them including both endpoints but not including those numbers
// > Input: `3`, `8`
// > Output: `[4, 5, 6, 7]`
function numberBetween(a, b) {
 const result = [];
    for (let i = a + 1; i < b; i++) {
        result.push(i);
    }

    console.log(result);
}

// numberBetween(3, 8);  


// 6. Create a function that accepts 0-n parameters and adds them together (or multiplies)
// > Input: `5`
// > Output: `15`

function calculate(operation, ...numbers) {
    if (numbers.length === 0) {
        return 0; 
    }

    if (operation === "add") {
        return numbers.reduce((acc, num) => acc + num, 0); 
    } else if (operation === "multiply") {
        return numbers.reduce((acc, num) => acc * num, 1); 
    } else {
        return "Invalid operation"; 
    }
}


// console.log(calculate("add", 1, 2, 3, 4, 5));    


// 7. Create a function that checks whether all elements within an array are unique values
// > Input: `[1,2,2,4,5]`
// > Output: `false`
function findUniqueElements(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}

const n = [1, 2, 2, 4, 5];
const values = findUniqueElements(n);
// console.log(values);  


// 8. Create a function that removes duplicates from an array
// > Input: `[1,2,2,3,4,5]`
// > Output: `[1,2,3,4,5]`
function removeDuplicates(inputArray) {

    const uniqueValues = new Set(inputArray);
    const uniqueArray = Array.from(uniqueValues);
    return uniqueArray;
}


// const inputArray = [1, 2, 2, 3, 4, 5];
// const resultArray = removeDuplicates(inputArray);
// console.log(resultArray); 
