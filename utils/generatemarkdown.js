
const generateMarkdown = Response => {
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
${data.github-username}
##Title
${data.title}
##Projection Description
${data.project-description}
##Installation
${data.installation}
##Usage
${data.usage}
##License
${data.license}
##Authors
${data.author}
##Contributors
${data.contributors}
##Badge
${data.badge}

# Questions
![Profile Avatar](${data.pfp})
If you have any questions, please e-mail me at ${data.email}.
# Credits
Github: [${data.username}](${data.url})
Copyright ${data.name}. All Rights Reserved.
`;
};
    


module.exports = {
    generateMarkdown};