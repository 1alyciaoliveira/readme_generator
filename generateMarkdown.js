// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "N/A") {
    `
    ##License
    Licensed by ${license} license.
    `
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ##Table of Contents
    * [Description](##description)
    * [Instalation](##instalation)
    * [Usage](##usage)
    * [Credits](##credits)
    * [Test Instructions](##test-instructions)
    * [License](##license)
    * [Contact](#contact)
    
    ##Description
    ${data.description}

    ##Installation
    ${data.instalation}

    ##Usage
    ${data.usage}

    ##Credits
    ${data.contribution}

    ##Test Instructions
    ${data.test}

    ${renderLicenseSection(data.license)}

    #Contact
    GitHub: [${data.github}](https://github.com/${data.github})
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
