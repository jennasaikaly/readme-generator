
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license == 'No License'){
    return '';
  }
  return `![badge](https://img.shields.io/badge/License-${license}-blue)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'No License'){
    return '';
  }
  return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license == 'No License'){
  return ``;
  }
  return `## License
 This application is covered under the ${license} license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `
  # ${data.title}  

  ## Description

  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Link](#link) 
  * [Screenshot](#screenshot)
  ${renderLicenseLink(data.license)} 
  
  ## Installation

  ${data.installation}

  ## Usage 

  ${data.usage}

  ## Link

  ${data.link}

  ## Screenshot

  ${data.screenshot}
  ${renderLicenseSection(data.license)}
  ## Questions

  Please contact me with any questions that you might have!<br/>
  Github: <a href="https://www.github.com/${data.github}" target="_blank">jennasaikaly</a><br/>
  Email: [jen.saikaly@gmail.com](mailto:${data.email})<br/>
  Created by: ${data.name} &copy; ${new Date().getFullYear()}
`;
}

module.exports = generateMarkdown;
  