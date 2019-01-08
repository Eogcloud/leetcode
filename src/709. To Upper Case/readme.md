#	709. To Lower Case

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

###	Example 1:

>Input: "Hello"
>Output: "hello"

###	Example 2:

>Input: "here"
>Output: "here"

### Example 3:

>Input: "LOVELY"
>Output: "lovely"


## My Solution

This solution uses a FOR loop to sequentially traverse a string character by character. At each character in the string, the decimal UTF-16 value of the character is checked to see if it's outside of the UTF tables range of lower case characters (between 65 and 90), if this is not the case, the character is replaced by it's lower case equivelant, by adding 32 to the character value, changing it to the lower case range of the UTF table.

This function runs in O(n) time due to the necessity of having to check each character to see if it's higher or lower case.

