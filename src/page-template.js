module.exports = templateData => {
    console.log(templateData);
    const {project, about, ...header} = templateData;
return `
# Project Name

## Description 

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

## Usage 

## License

## Contributing

## Tests
`;
};

