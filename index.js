// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?', 
    },
    {
        type: 'input',
        name: 'instalation',
        message: 'Tell us the instructions to install your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use it.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contibution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please, provide some instructions so the others can test it.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['A', 'B', 'C', 'D'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(title, data) {
    const fileName = `${title.toLowerCase().split(' ').join('')}_README.md`;

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Done')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const title = responses.title.toLowerCase().split(' ').join('');
        const readmeData = generateMarkdown({...responses});
        writeToFile(`${title}_README.md`, readmeData);
    });
}

// Function call to initialize app
init();

