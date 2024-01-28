// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMD = require('./Develop/new-README.md');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a descrition for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information for your project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the license you will be using for your project.',
        choices: ['MIT','Apache','GPL']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success! README.md generated.')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('./Develop/new-README.md', generateMD(answers))
    })
};

// Function call to initialize app
init();
