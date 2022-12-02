// exe 1
// Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
// console.log(calFahrenheit(20)) //68
function calFahrenheit(x) {
    console.log((x*1.8)+32)
}
calFahrenheit(20)

console.log(`End of a exercise 1`)


// exe 2
// Write a function to reverse a number
// console.log(reverseNum(123)) //321

function reversedNum(num) {
    return (parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num))
}
console.log(reversedNum(-123))

console.log(`End of a exercise 2`)

// exe 3
// Count number of Vowels in String
// Function `countVowel` returns the number of vowels in input string.
// console.log(countVowel("Hello")) //2

function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}

console.log(getCount("how are you"))

console.log(`End of a exercise 3`)

// exe 4
// Write a function to check if an input string is a palindrome
// Function `checkPalindrome` return a boolean value based on whether the input string is palindrome or not.
// a palindrome is a word, phrase or number which reads the same backwards as it does when being read forwards.
// console.log(findPalindrome("racecar")) //true

function checkPalindrome(x) {
    const len = x.length;
    for (let i = 0; i < len/2; i++) { 
        if (x[i] === x[len - 1 - i]) {
            return true;
        } 
        else {
            return false;
        }
    }
        
}
console.log(checkPalindrome("heshe"))

console.log(`End of a exercise 4`)




// exe 5
// Write a function to generate a random number
// Function `genRandom` return a generated random integer number between the provided start and end range.
// console.log(genRandom(1,10)) // random int between 1 to 10

function genRandom(min, max) {
    let diff = max - min;
    let rand = Math.random() 

    random = Math.floor((rand * diff)+min)
    
    return   random
}
console.log(genRandom(1, 10))

console.log(`End of a exercise 5`)

// exe 6
// Write a function to find Factorial of a number
// Function `getFactorial` return the factorial of a number using the formula `n*(n-1)*(n-2)*…` .
// console.log(getFactorial(5)) // 120

function getFactorial(x) {
    if (x < 0) {
        return -1;
    }

    else if (x == 0) {
        return 1
    }

    else {
        return (x * getFactorial(x-1) )
    }
    
}
console.log(getFactorial(5))
console.log(`End of a exercise 6`)
// exe 7
// Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// console.log(addNumber(10,45,34,130)) // 219
function addNumber(...args) {
    return args.reduce (function (a, b) {
        return a+b
    })
}
console.log(addNumber(1,2,3,4,5,6,7,8,9))

