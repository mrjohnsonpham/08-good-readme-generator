


// function to generate markdown 

const generateMarkdown = response => {
    return ` 
    # Tables of Contents
* [Github Username](#github-username)
* [Title](#title)
* [Project Description](#project-description)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Authors](#authors)
* [Contributors](#contributors)
* [Badge](#badge)

##Github Username
![GitHub](https://img.shields.io/github/license/${response.username}/${response.repo})

##Title
${response.title}

##Projection Description
${response.description}

##Installation
${response.installation}

##Usage
${response.usage}

##License
${response.license}

##Authors
${response.authors}

##Contributors
${response.contributors}

##Badge

${response.badge}
`};


// # Questions
// ![Profile Avatar](${data.pfp})
// If you have any questions, please e-mail me at ${data.email}.
// # Credits
// Github: [${data.username}](${data.url})
// Copyright ${data.name}. All Rights Reserved.
// `;

    


module.exports = {
    generateMarkdown};