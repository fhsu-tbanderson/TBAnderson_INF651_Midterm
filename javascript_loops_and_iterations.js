//Question 1: Write a while loop that prints the numbers from 1 to 20.
let counter = 1;
while(counter <= 20)
{
    console.log(counter);
    counter++;
}

//Question 2: Write a JavaScript function called calculateSum that takes a positive
//integer n as an argument and returns the sum of all numbers from 1 to n.
function calculateSum(n)
{
    let total = 0;

    for(let i = 1; i <= n; i++)
    {
        total = total + i;
    }

    return total;
}

//Question 3: Write a JavaScript function called calculateFactorialIterative that
//takes a positive integer n as an argument and calculates its factorial using a loop
//instead of recursion.
function calculateFactorialIterative(n)
{
    let result = 1;

    for(let i = 2; i <= n ; i++)
    {
        result = result * i;
    }

    return result;
}