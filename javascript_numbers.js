//Question 1: Calculate the square root of a given number and store the result in a
//variable called result.

let n = 2;
let result = n **2;


//Question 2: Write a JavaScript function called isPrime that takes a number as an
//argument and returns true if it is a prime number and false otherwise.
function isPrime(n)
{
    if(n <= 1)
        return false;
    
    for(let i = 2; i < n ; i++)
    {
        if(n % i == 0) //check for divisors between 2 and the number
            return false;
    }

    return true;
}

//Question 3: Write a JavaScript function called generateRandomNumber that takes
//two numbers, min, and max, as arguments and returns a random number between
//min and max
function generateRandomNumber(min, max)
{
    return Math.floor(min + ( (max - min +1) * Math.random() ));
}