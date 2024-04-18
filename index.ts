#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright.bold(`\t\n "Welcome To CodeWithSheza - Currency Converter..!!" \n`));

let currency : any = {
    PKR :1,         //Pakistani Rupee Used as base currency
    USD :0.0036,    //United States Dollar
    SAR :0.014,     //Saudi Riyal
    EUR :0.0033,    //Euro
    OMR :0.0014,    //Omani Rial
    INR :0.30,      //Indian Rupee
    GBP :0.0028,    //Pound Sterling
    TRY :0.12,      //Turkish lira
    CNY :0.026,     //Chinese Yuan
    AED :0.013      //United Arab Emirates Dirham
}

let userAnswer = await inquirer.prompt ([
    {
       name : "from",
       message : chalk.yellowBright.italic("select currency convert from"),
       type : "list",
       choices : ["PKR", "USD", "SAR", "EUR", "OMR", "INR", "GBP", "TRY", "CNY", "AED" ]
    },
    {
        name : "to",
        message : chalk.yellowBright.italic("select currency convert to"),
        type : "list",
        choices : ["PKR", "USD", "SAR", "EUR", "OMR", "INR", "GBP", "TRY", "CNY", "AED" ]
    },
    {
        name : "amount",
        message : chalk.yellowBright.italic("Enter Your Amount"),
        type : "number"
    },
])

let fromCurrency = currency[userAnswer.from];
let toCurrency = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseCurrency = amount / fromCurrency ;
let currencyConverter = baseCurrency * toCurrency ;

console.log(chalk.bgGreenBright.bold('\t\n Your Convert Amount Is', Math.round(currencyConverter)));
