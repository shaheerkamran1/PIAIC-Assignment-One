/* - **Scenario 4: String Reversal**
   - Implement a function **`reverseString`** that reverses a given string.
   - The function should take a string as a parameter and return the reversed string. */
let myString = "This is a string";
function ReverseString(sentence) {
    let stringLength = sentence.length;
    let reverse = "";
    for (let i = stringLength - 1; i >= 0; i--) {
        reverse += sentence[i];
    }
    return reverse;
}
console.log(`Your original string: ${myString}`);
let reversedString = ReverseString(myString);
console.log(`Your reversed string is: ${reversedString}`);
export {};
//---------------------Note !!!!!!!!!!!!!!
/* The error I encountered in this problem was the occurence of undefined
when the iterator i was set to stringLength instead of stringLength-1. Which was resolved later on */
