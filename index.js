import inquirer from "inquirer";

import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


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
    {   
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT','Apache2.0','GPL3.0','BSD3','None'] 
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
]).
then((answers) => {
    const readMe = generateMarkdown(answers);
    fs.writeFileSync('README.md',readMe,(err) =>{
        if (err) {
            console.error(err);
        }
        else{
            console.log('README.md file created successfully');
        }  
    });

});