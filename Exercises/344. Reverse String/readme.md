#	344. Reverse String

Write a function that takes a string as input and returns the string reversed.

###	Example 1:

> Input: "hello"
> Output: "olleh"

###	Example 2:

> Input: "A man, a plan, a canal: Panama"
> Output: "amanaP :lanac a ,nalp a ,nam A"


## My Solution

The String prototype provides a *split()* method for breaking up a string based on a given token and returning an array of strings based on where the token delimited the original string. If I pass an empty string *""* into this method, it'll split the string on each character, providing me with an array of characters. At this point, the array prototypes reverse method allows me to reverse the order of the letters, and finally the string prototype's join method (taking the same blank string argument), puts the unique letters in the array back together as one single string and returns this.

