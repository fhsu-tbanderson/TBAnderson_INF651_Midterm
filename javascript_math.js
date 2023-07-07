//Question 1: Generate a random number between 1 and 100 (inclusive) using the
//Math.random() function and round it to the nearest integer. Store the result in a
//variable called randomNumber.

let randomNumber = Math.floor(1 + (99 * Math.random() ) );


//Question 2: Write a JavaScript function called calculateFactorial that takes a
//number as an argument and returns its factorial.
//uses recursive approach to calculate the factorial
function calculateFactorial(n)
{
    let result = 1;

    if(n === 1)
        return n;
    else
        return n * calculateFactorial(n-1);
    
}

//Question 3: Write a JavaScript function called calculatePower that takes two
//numbers, base and exponent, as arguments and returns the result of base raised to
//the power of exponent.
function calculatePower(base, exp)
{
    let result = 1;

    for(let i = 1; i <= exp; i++)
    {
        result = result * base;
    }

    return result;


}

