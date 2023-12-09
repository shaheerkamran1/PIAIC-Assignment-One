import inquirer from 'inquirer'
// - **Scenario 5: Temperature Conversion:**
//     - Create a function **`convertCelsiusToFahrenheit`** 
//       that converts temperature from Celsius to Fahrenheit.
//     - The function should take a temperature value in Celsius as a 
//       parameter and return the equivalent temperature in Fahrenheit. */

let userInput = await inquirer.prompt([
    {
        "name":"temperature",
        "type":"number",
        "message":"Input your temperature in Celcius"
    }
]);

let celcius = userInput.temperature as number;
function convertCelsiusToFahrenheit(celcius:number):number{
let temp:number=celcius
let fah:number=temp*1.8 + 32;

return fah

}

let Fahrenheit:number=convertCelsiusToFahrenheit(celcius)
console.log(`Your temperature in celcius: ${celcius}\nYour temperature in fahrenheit: ${Fahrenheit}`)