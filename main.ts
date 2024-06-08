

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellowBright("___________________________________________________"));
console.log(chalk.bold.magentaBright(">>> (: ")+ chalk.bold.cyan.underline("WelCome ") +chalk.bold.blue.underline("To ")+chalk.bold.redBright.underline("Automation") +chalk.bold.greenBright.underline(" Table ")+ chalk.bold.cyan.underline("Generator")+chalk.bold.magentaBright(" :) <<<"));
console.log(chalk.bold.yellowBright("___________________________________________________\n"));

const userInput = await inquirer.prompt(
    [
        {
            name : "input",
            type : "number",
            message : chalk.bold.greenBright("Enter The Number Of Table :"),
            validate : (input)=>{
                let data = parseInt(input)
                if(isNaN(data)){
                    return "Please enter numric number"
                }else{
                    return true
                }
            }
        }
    ]
)

let userData = userInput.input

console.log(chalk.bold.magentaBright("Please Wait...."));
console.log("");




setTimeout(()=>{
    console.log(chalk.bold.yellowBright("___________________________________________________"));
console.log(chalk.bold.magentaBright(">>> (: ")+ chalk.bold.cyan.underline("The ") +chalk.bold.blue.underline("Table Of ")+chalk.bold.redBright.underline(`${userData} `) +chalk.bold.greenBright.underline(`Generated`)+ chalk.bold.cyan.underline(" Successfully")+chalk.bold.magentaBright(" :) <<<"));
console.log(chalk.bold.yellowBright("___________________________________________________\n"));
    
    
    for(let i =1; i <=10; i++){
        let table = userData * i
        console.log(chalk.bold.whiteBright(`${chalk.bold.magentaBright(userData)} * ${chalk.bold.cyanBright(i)} = ${chalk.bold.yellowBright(table)}`));
        
    }
},2000)

