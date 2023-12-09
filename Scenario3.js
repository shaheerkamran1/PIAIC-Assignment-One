// - **Scenario 3: Calculate Area:**
//     - Create a function **`calculateArea`** that calculates the area of a rectangle.
//     - The function should take width and height as parameters and return the calculated area.
// let userInput:number= await inquirer.prompt([
//     {
//         "name":"myWidth",
//         "type":"number",
//         "message":"Input Width: "
//     }
// ]);
// let width:number=userInput.myWidth as number
// let inputHeight:number= await inquirer.prompt([
//     {
//         "name":"HeightInput",
//         "type":"number",
//         "message":"Input Height"
//     }
// ]);
// let height=inputHeight.HeightInput 
// function calculateArea(width:number,height:number):number
// {
//     return width*height
// }
// const area:number=calculateArea(width,height)
// console.log(`Your calculated area is: ${area}`)
let width = 5.9;
let height = 8.12;
function calculateArea(a, b) {
    return a * b;
}
let answer = calculateArea(width, height);
console.log(`Your total Area is: ${answer}`);
export {};
//--------------------Note !!!!---------------------
/* In this program i tried my best to overcome this problem by using inquirer prompt method, but the
   main issue i was facing was that it was not able to get the value as a number, however it was
   expecting it as object, the main issue was in line 15 and line 25. I tried my best but afterall,
   tried to solve it by using initialized values.*/
