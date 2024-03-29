import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([{
        name: "guessingnumber",
        type: "number",
        message: "Please guess a number between 1-6:"
    }]);
if (answer.guessingnumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guest wrong number");
}
