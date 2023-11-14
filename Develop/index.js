// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    // Add more questions for description, installation, usage, etc.
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const readmeContent = generateMarkdown(answers);
  
        // Write the readmeContent to a file using the file system (fs) module
        fs.writeFileSync('README.md', readmeContent);
  
        console.log('README.md successfully generated!');
      })
      .catch((error) => console.error(error));
  }
  
  init();

// Function call to initialize app
init();
