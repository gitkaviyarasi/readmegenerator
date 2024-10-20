// import the file system,qnd inquirer modules.
import inquirer from "inquirer";
import fs from "fs";

//import the generateMarkdown function which has the markdown template.
import generateMarkdown from "./utils/generateMarkdown.js";

//create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name:'projectName'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
    },
    {   //list of licenses to choose from 
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','Apache 2.0','GPL 3.0','BSD3','None'] 
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'what command should be run to run tests?',
        name: 'test',
        default: 'npm test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    },
]). // get the answers from the user and generate the markdown file
then((answers) => {
    const readMe = generateMarkdown(answers);
    fs.writeFile('README.md',readMe,(err) =>{
        if (err) {
            console.error(err);
        }
        else{
            console.log('README.md file created successfully');
        }  
    });

});