// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
class markDown {
  static generateReadme(answers) {
    return `# ${answers.title}

  ##Table of Contents
  -[Description](#Description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contributions](#Contributions)
  -[Contact](#Contact)
  -[License](#License)

  ## Description
  ${answers.Description}
  
  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## Contributions
  ${answers.Contributions}

  ## Contact
  ${answers.Contact}

  ## License
  ${answers.License}

`;
  }
}

module.exports = markDown;
