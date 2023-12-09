/* - **Scenario 2 - Subarray Creation:**

    - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
    - **`splice`**: Create a subarray by removing elements from the original array.
    - **`slice`**: Create a subarray without modifying the original array. */

    let arr=[8,3,7,2,7,3,12,3,63,13,73,1,0]      //An array arr initialized with length of 13 values.

    arr.splice(5,3)
    console.log(`New spliced array becomes: ${arr}`)  // From 5th element onwwards i.e from 7 onwards total 3 elements are deleted.

    let array=arr.slice(0,5)      /* It is a immutable method which returns a subarray  
                                     where first parameter is the starting point 
                                     and second parameter is the ending point
                                     (ending point is excluded into the sub array, 
                                     the last element included in splice method is (parameter2)-1)*/
                                     
    console.log(`New sliced array becomes: ${array}`) 