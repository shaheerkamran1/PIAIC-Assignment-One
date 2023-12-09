/* - **Scenario 4: String Reversal**
   - Implement a function **`reverseString`** that reverses a given string.
   - The function should take a string as a parameter and return the reversed string. */

   let myString:string="This is a string";

   function ReverseString(sentence:string):string{

    let stringLength:number=sentence.length
    let reverse:string="";
    
    for(let i:number=stringLength-1;i>=0;i--)
    {
        reverse+= sentence[i]

    }
    
    return reverse
   }


   console.log(`Your original string: ${myString}`)
   let reversedString:string=ReverseString(myString)
   console.log(`Your reversed string is: ${reversedString}`)

   //---------------------Note !!!!!!!!!!!!!!

   /* The error I encountered in this problem was the occurence of undefined 
   when the iterator i was set to stringLength instead of stringLength-1. Which was resolved later on */
