const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
const util = require('util');
console.log('Current working directory:', __dirname);

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be run to run tests?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
          return console.log(err);
      }
      console.log("Success!")
  });
}

const writeFileAsync = util.promisify(writeToFile);

// How the cmd starts

// function to initialize program
async function init() {
  try{
      // Answer the Questions
      const userResponse = await inquirer.prompt(questions);
      console.log('Your Response: ', userResponse);
      console.log("Retrieving your GitHub data next");


      const markdown = generateMarkdown(userResponse);
      console.log(markdown);

      await writeFileAsync('./ExampleREADME.md', markdown);
      console.log("README is Completed....Now sit back and enjoy the Coffee :)");

  
  } catch  (error) {
      console.error();
  }

}

// function call to initialize program
init();