// npm packages that you need to install
let inquirer = require("inquirer");
let fs = require("fs");
const {generateMarkdown} = require('./utils/generatemarkdown');

// array of questions for users 
const questions = [

];

//Using inquirer npm to access prompt to ask the user for GitHub username, name of project, description, table of contents, instructions on installing, usage, license, contributing, tests.
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "Please enter your github username:"
    },
{
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: title => {
        if(title.length < 5){
            return "Title is too short.";
        }
        else{
            // all validation checks passed
            return true;
        }
    }
},
{
    type: "input",
    name: "description",
    message: "Please provide a detail description of the project",
         validate: description => {
                if(description.length < 10){
                    return "Description is too short.";
                }
                else{
                    // all validation checks passed
                    return true;
                }
            }
},
{
    type: "input",
    name: "installation",
    message: "Please leave a clear concise explanation of the installation process",
    validate: installation => {
                if(installation.length < 5){
                    return "Installation steps are required.";
                }
                else{
                    // all validation checks passed
                    return true;
                }
            }
},
{
    type: "input",
    name: "usage",
    message: "Describe the usage of the project/application",
    validate: usage => {
                if(usage.length < 10){
                    return "Usage is too short.";
                }
                else{
                    // all validation checks passed
                    return true;
                }
            }
},
{
    type: "checkbox",
    name: "license",
    message: "Which License(s) are you using?",
    choices: [
        "MIT License",
        "Apache-2.0",
        "GPLv3",
        "Microsoft Public",
        "None",
]},
{   type: "input",
    name: "authors",
    message: "Name of Author",
    
},
{
    type: "input",
    name: "contributors",
    message: "Name of Contributors(Please use a comma after each person's name)",
    validate: contributor => {
                 if(contributor.length < 3){
                     return "Contributor(s) required.";
            }
            else{
                // all validation checks passed
                return true;
            }
        }
},
{
    type: "input",
    name: "tests",
    message: "Provide examples on how to run tests."
},
{
    type: "input",
    name: "badge",
    message: "Insert Badge Code"
},
]).then(responseObj => {
    // console.log(responseObj);     // this is to check if your object array is brought back
    console.log("Response: ")
    console.log(responseObj)
    const finishedMarkdown = generateMarkdown(responseObj);

    fs.writeFile('./profile.md', finishedMarkdown, err =>{ 
        if (err){
            console.log(err)
        } else {
            console.log('Great Success!')
        }
    })

})
















// .then( response => {
//     console.log(response.badge);
//     console.log(response.title);
// }





    




// function to initialize the program
// async function init () {
//     try {
//         const response = await promptUser();
//         const readMe = generateMarkdown(response);

//         await writeFileAsync("README.md", readMe);
//         console.log("Success");
//     } catch (err) {
//         console.log(err);
//     }
// }

//function to call to initilize program
// init ();



// validate email but the special characters is not working

// type: "input",
// name: "github email",
// message: "Please enter your github email:",
// validate: emailinPut => {
//     return (/^.+@.t\..=$/gi.test(emailInput) ? true:false)