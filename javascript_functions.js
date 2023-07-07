//Question 1: Write a JavaScript function called reverseString that takes a string as
//an argument and returns the reversed version of the string.
function reverseString(s)
{
    let newString = "";

    for(let i = s.length -1; i >= 0; i--) //loop will iterate from the end to the beginning of original string
    {
        newString = newString + s[i];
    }

    return newString;
}


//Question 2: Write a JavaScript function called calculateBMI that takes a person's
//weight (in kilograms) and height (in meters) as arguments and returns their body
//mass index (BMI).
function calculateBMI(weight, height)
{
    return weight/(height ** 2); //bmi = weight/height squared

}



//Question 3: Write a JavaScript function called capitalizeWords that takes a
//sentence as an argument and returns the sentence with each word capitalized.
function capitalizeWords(s)
{
    let newString = "";

    for(let i = 0; i < s.length; i++)
    {
        newString = newString + s[i].toUpperCase(); //capitalize each character and add to new string
    }

    return newString;
}
