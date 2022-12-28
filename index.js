// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./Utils/generateMarkdown.js");
const { fileURLToPath } = require("url");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description for the project?",
    name: "Description",
  },
  {
    type: "input",
    message: "Installation instructions?",
    name: "Installation",
  },
  {
    type: "input",
    message: "what is this project used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Contributions?",
    name: "Contributions",
  },

  {
    type: "input",
    message: "For questions who do people email?",
    name: "Contact",
  },

  {
    type: "list",
    message: "License?",
    name: "License",
    choices: ["MIT", "ISC", "GNUPLv3"],
    filter(val) {
      return val.toLowerCase();
    },
  },
];

// TODO: Create a function to write README file
//fs.writefile("./README.md", JSON.stringify(Marked.generateMarkdown), (err) =>
//err ? console.error(err) : console.log("Success!")
//);
// const mark = markDown.generateReadme(answers);
// fs.writeFile("README.md", mark, (err) => {
//   if (err) {
//     console.log("could not save this file, sorry.");
//   } else {
//     console.log("YAY! README.md file created!");
//   }
// });

// TODO: Create a function to initialize app
async function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const mark = markDown.generateReadme(answers);

      fs.writeFile("README.md", mark, function (err) {
        if (err) {
          console.log("could not save this file, sorry.");
        } else {
          console.log("YAY! README.md file created!");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
