#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Awais-Arain CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessingnumber",
        type: "number",
        message: "Enter your guessing number (Number Limit form (1 to 5) ) ",

    },
]);

if(answer.userguessingnumber === randomNumber){
    console.log("Congratulation! You guess a correct number");
}
else{
    console.log("Sorry! You guess a wrong number");
}


