//Question 1: Write a condition that checks whether a variable isRaining is true and
//variable isSunny is false. Store the result in a variable called shouldStayInside.

let isRaining = true; //initializing variables to give the condition context
let isSunny = true;

let shouldStayInside = isRaining && !isSunny;

//Question 2: Write a JavaScript function called hasPermission that takes two
//boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
//permission and false otherwise.

function hasPermission(isUserLoggedIn, isAdmin)
{
    return isUserLoggedIn && isAdmin;
}


//Question 3: Write a JavaScript function called hasUniqueCharacters that takes a
//string as an argument and returns true if all characters in the string are unique and
//false otherwise.

//Note: Unique characters are considered by case, so "U" is different
// from "u"

function hasUniqueCharacters(s)
{
    for(let i = 0; i < s.length ; i++)
    {
        let characterCount = 0;
        for(let j = 0; j< s.length; j++)
        {
            if(s[i] === s[j])
                characterCount++;
        }

        if(characterCount > 1)
            return false;
    }

    return true;
}
