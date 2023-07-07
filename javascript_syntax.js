//Question 1: Identify and correct the syntax errors in the following code:
// var number = 10;
// console.log (Number + 5);

var number = 10;
console.log(number + 5); //the expression passed to console.log should be the variable name, not the Number object


//Question 2: Write a JavaScript function called isEven that takes a number as an argument
//and returns true if the number is even and false if it is odd.

function isEven(n)
{
    return n % 2 === 0;
}


//• Question 3: Write a JavaScript function called isPalindrome that takes a string as an
//argument and returns true if it is a palindrome (reads the same forwards and backwards)
//and false otherwise.

function isPalindrome(s)
{
    let reverseString = "";

    for(let i= s.length-1; i>=0; i--) //use loop to create the reverse string
    {
        reverseString = reverseString + s[i];
    }

    return s === reverseString; //test the equality of original string and reversed string; strict comparison (uppercase/lowercase must match)

}