//Question 1: Given the variables a = 10 and b = 3, what is the value of the
//following expression: a % b?

//Answer: The value would be 1. 10 divided by 3 is 3 with a remainder of 1.

//Question 2: Write a JavaScript function called isInRange that takes a number as
//an argument and returns true if it falls within a specific range (e.g., between 10
//and 20) and false otherwise.

//Note: The question does not specify the function having parameters for the range
//but I have added upperBound and lowerBound to allow the caller to provide the range
function isInRange(n, lowerBound, upperBound)
{
    return n >= lowerBound && n <= upperBound;
}


//Question 3: Given the variables a = 5, b = 3, and c = 2, what is the value of the
//following expression: a > b || c < b && a === c?

//Answer the values of the expression is broken down likeso:
// (5 > 3) || (2 < 3) && (5 === 2)
// true || (true && false)
// true || false
// true
// The answer is true


