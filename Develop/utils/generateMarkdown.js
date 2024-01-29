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
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contributing, tests, license, username, email}) =>
  `# ${title}

  #Table of Contents
  -[Description]()
  -[Installation]()
  -[Usage]()
  -[Contributing]()
  -[Tests]()
  -[License]()
  -[Questions]()

  #Description
  ${description}

  #Installation
  ${installation}

  #Usage
  ${usage}

  #Contributing
  ${contributing}

  #Tests
  ${tests}

  #Questions
  ${username}
  ${email}
`

module.exports = generateMarkdown;
