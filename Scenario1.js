/* - **Scenario 1 - Modify Array with Methods:**
    - Initialize an array with some initial elements.
    - Demonstrate the usage of the following array methods:
    - **`push`**: Add new elements to the end of the array.
    - **`pop`**: Remove the last element from the array.
    - **`shift`**: Remove the first element from the array.
    - **`unshift`**: Add new elements to the beginning of the array. */
let array = [5, 2, 6, 2, 5, 21];
//Push
array.push(10);
console.log(`New Array after pushing 10 in the end becomes: ${array}`);
//Pop
array.pop();
console.log(`New Array after popping last element from the array becomes: ${array}`);
//Shift
array.shift();
console.log(`New Array after shifting first element from the array becomes: ${array}`);
//Unshift
array.unshift(58);
console.log(`New Array after using the unshifting method to add an element in the array becomes: ${array}`);
export {};
//-------------Note !!!!!!!!!!
/* Alhamdulillah I encountered no problem during solving the Scenario 1 because I was already
aware of the terminologies such as push(), pop() as I studied them in Data Structures and Algorithms */ 
