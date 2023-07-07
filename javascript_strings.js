//Question 1: Given the string "Hello, World!", write code to convert it to
//uppercase and store the result in a variable called uppercaseString.
let uppercaseString = "Hellow, World!".toUpperCase();

//Question 2: Write a JavaScript function called countVowels that takes a string as
//an argument and returns the number of vowels present in the string.
function countVowels(s)
{
    let vowels = ['a','e','i','o','u']
    let vowelCount = 0;

    for(let i = 0; i < s.length; i++)
    {
        if( vowels.indexOf(s[i]) !== -1 ) //check if current index is in the array of vowels (-1 means it is not)
            vowelCount++;
    }

    return vowelCount;
}


//Question 3: Write a JavaScript function called truncateString that takes a string
//and a number maxLength as arguments and returns a truncated version of the
//string if it exceeds maxLength, appending an ellipsis ("...") at the end.

function truncateString(s, maxLength)
{
    if(s.length <= maxLength) //return string if the length is less than or equal to max
        return s;

    let newString = "";

    for(let i = 0; i < maxLength; i++) //use for loop to build truncated string, it will only iterate up to max length
    {
        newString = newString + s[i];
    }

    newString = newString + "...";

    return newString;
}