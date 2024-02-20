// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return  ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return ` ![license](https://choosealicense.com/licenses/${license})`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ' ';
  } else {
    return `
    # License
    ${license}
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  # Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [License](# License)
  - [Questions](#Questions)

  # Description
  ${answers.description}

  # Installation
  ${answers.installation}

  # Usage
  ${answers.usage}

  # Contributing
  ${answers.contributing}

  # Testing
  ${answers.tests}

  # License

  # Questions
  Reach out using the following contact information:
  ${answers.username}
  ${answers.email}
`;
}
  
module.exports = generateMarkdown;