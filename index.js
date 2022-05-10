// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ 
            //Project Title (title of readme)
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
    name: 'link',
    message: 'What is the URL for the deployed site?',
    validate: linkInput => {
      if (linkInput) {
        return true;
      } else {
        console.log('Please provide a URL');
        return false;
      }
    }
  },
//test instructions
{  
    type: 'input',
    name: 'screenshot',
    message: 'Do you have a screenshot for the site?',
    validate: screenshotInput => {
      if (screenshotInput) {
        return true;
      } else {
        console.log('Please provide a screenshot');
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
        'No License',
        'MIT',
        'Apache(2.0)',
        'GPL(2.0)',
        'GPL(3.0)',
        'ISC',
        ],
    validate: licenseInput => {
      if (licenseInput.length < 1) {
        return 'Please choose one';
      } else {
       return true;
      }
    }
  },
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
  name: 'email',
  message: 'Enter your email address. (required)',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('Please enter your email address!');
      return false;
    }
  }
  },
];
// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        err ? console.log(err) : console.log("README.md has been created");
    })
}
// TODO: Create a function to initialize app
const promptUser = () => {
    inquirer.prompt(questions)
   .then(function(data){
       writeFile("./dist/README.md", generateMarkdown(data))
   }) 
    };

// Function call to initialize app
//init();
promptUser()
