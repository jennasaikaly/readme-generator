// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
//const questions = [];
//Project:

const promptProject = () => { 
    return inquirer.prompt([
        //Project Title (title of readme)
        {  
            type: 'input',
            name: 'projectTitle',
            message: 'What is your project name? (Required)',
            validate: projectTitle => {
              if (projectTitle) {
                return true;
              } else {
                console.log('Please enter your project title!');
                return false;
              }
            }
          },
 //description
 {  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
//installation instructions
{  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
//usage instructions
{  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
//  contribution guidelines
{  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
//test instructions
{  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
// license (list of options)
{  
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project name? (Required)',
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  }
]);
};
const promptUser


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
