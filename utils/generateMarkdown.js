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
  static giveBadge(answers) {
    //  const badges={
    //   MIT:"https://img.shields.io/badge/License-MIT-yellow.svg"
    //   ISC:
    //   GNUPLv3:
    // }
    //  return badges[license]
    console.log("here is answers.License: ", answers.License);
    if (answers.License === "mit") {
      console.log("MIT if statement works!");
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    }
    if (answers.License === "apache") {
      console.log("apache if statement works!");
      return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg]";
    }
    if (answers.License === "gnuplv3") {
      console.log("gn if statement works!");
      return "[![License: gnuplv3](https://img.shields.io/badge/License-GPLv3-blue.svg]";
    }
  }

  static generateReadme(answers) {
    return `# ${answers.title}
  ${markDown.giveBadge(answers)}
  
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
