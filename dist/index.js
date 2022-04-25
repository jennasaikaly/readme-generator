// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ 
            //Project Title (title of readme)
        {  
            type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub name!');
            return false;
          }
        }
      },
      {
            type: 'input',
            name: 'title',
            message: 'What is your project name? (Required)',
            validate: titleInput => {
              if (titleInput) {
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
    name: 'description',
    message: 'Describe your project. (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
//installation instructions
{  
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions? (Required)',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('Please enter the installation instructions!');
        return false;
      }
    }
  },
//usage instructions
{  
    type: 'input',
    name: 'usage',
    message: 'How is your project used? (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please describe how your project is used!');
        return false;
      }
    }
  },
//  contribution guidelines
{  
    type: 'input',
    name: 'contribution',
    message: 'What are the Contribution Guidelines for your project? (Required)',
    validate: contributionInput => {
      if (contributionInput) {
        return true;
      } else {
        console.log('Please provide Contribution Guidelines!');
        return false;
      }
    }
  },
//test instructions
{  
    type: 'input',
    name: 'test',
    message: 'How can this project be tested? (Required)',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('Please provide Testing Instructions!');
        return false;
      }
    }
  },
// license (list of options)
{  
    type: 'checkbox',
    name: 'license',
    message: 'What licensing does your project have? (Required)',
    choices: [
        'one',
        'two',
        'three',
        'four',
        ],
    validate: licenseInput => {
      if (licenseInput.length < 1) {
        return 'Please choose one';
      } else {
        return true;
      }
    }
  }
];

//const promptUser


// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/READ-ME.md', data, err => {
            if (err){
                reject(err);
                return
            }
            });
    })
}


// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt(questions)
   // .then((userInput) => {

  //  })
    };

// Function call to initialize app
//init();
promptUser();
