import inquirer from 'inquirer';
/* **Task Description:**

1. **Scenario:**
   You are tasked to simulate a simple shopping experience using conditional statements and loops at a supermarket.

   2. **Requirements:**
    - Create a TypeScript program that simulates a shopping scenario with multiple conditions.
    - Utilize if-else, if-else if-else statements for decision making based on different scenarios encountered while shopping.
    - Incorporate nested loops to simulate actions within various sections of the supermarket.


    3. **Functionalities to Include:**
    - **Scenario 1 - Buying Groceries:**
        - Simulate buying fruits, vegetables, and groceries.
        - Apply if-else statements to check specific conditions:
        - Check if the customer wants fruits or vegetables.
        - Based on the choice, suggest different items available and their prices.
        - Display the total bill.


    - **Scenario 2 - Checking Discounts:**
        - Introduce a discount scenario based on the total bill amount.
        - Use if-else if-else statements to apply discounts:
        - If the bill amount is above a certain value, apply a discount.
        - Display the discounted total.


    - **Scenario 3 - Checkout Process:**
        - Simulate the checkout process.
        - Use nested loops to ask for payment methods:
        - First, ask the user for the preferred payment method (nested loop for payment options).
        - Display a confirmation message based on the payment method chosen. */
let apple = 10;
let mango = 8;
let banana = 12;
let fruits = [apple, mango, banana];
let tomato = 7;
let potato = 11;
let pumpkin = 15;
let vegetables = [tomato, potato, pumpkin];
let userInput = await inquirer.prompt([
    {
        "name": "choice",
        "type": "number",
        "message": "What would you like to buy?"
    }
]);
let choice = userInput.choice;
let userInputCatagory = await inquirer.prompt([
    {
        "name": "choiceCat",
        "type": "input",
        "message": "Would you buy fruit or vegetable?"
    }
]);
let choiceCatagory = userInputCatagory.choiceCat;
let userInputQuantity = await inquirer.prompt([
    {
        "name": "choiceQuantity",
        "type": "number",
        "message": "Input your quantity"
    }
]);
let quantity = userInputQuantity.choiceQuantity;
let billapple = quantity * fruits[apple];
let billmango = quantity * fruits[mango];
let billbanana = quantity * fruits[banana];
let billFruits = billapple + billmango + billbanana;
let billtomato = quantity * vegetables[tomato];
let billpotato = quantity * vegetables[potato];
let billpumpkin = quantity * vegetables[pumpkin];
let billVegetables = billtomato + billpotato + billpumpkin;
let totBill = billFruits + billVegetables;
console.log("Press 1 for fruits.\nPress 2 for vegetables.\nPress 0 to exit.");
while (choiceCatagory != 0) {
    console.log("Press 1 for fruits.\nPress 2 for vegetables.\nPress 0 to exit.");
    console.log(choiceCatagory);
    if (choiceCatagory === 1) {
        console.log("Press 1 for apple.\nPress 2 for mango.\nPress 3 for banana.");
        console.log(choice);
        {
            if (choice === 1) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for apple is: ${billapple}`);
                break;
            }
            if (choice === 2) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for mango is: ${billmango}`);
                break;
            }
            if (choice === 3) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for banana is: ${billbanana}`);
                break;
            }
            console.log(`Your fruits bill is ${billFruits}`);
            break;
        }
    }
    if (choiceCatagory === 2) {
        console.log("Press 1 for tomato.\nPress 2 for potato.\nPress 3 for pumpkin.");
        {
            if (choice === 1) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for tomato is: ${billtomato}`);
                break;
            }
            if (choice === 2) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for potato is: ${billpotato}`);
                break;
            }
            if (choice === 3) {
                console.log(`Now, ${quantity}`);
                console.log(`Your bill for pumpkin is: ${billpumpkin}`);
                break;
            }
            console.log(`Your vegetables bill is ${billVegetables}`);
            break;
        }
    }
    if (choiceCatagory === 0) {
        break;
    }
    break;
}
console.log(`Your total bill is: ${totBill}`);
