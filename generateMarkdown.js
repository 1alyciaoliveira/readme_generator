//showing the badge for the license with the respective link.
function renderLicenseBadge(license) {

  if(license  === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache_2.0") {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return "";
  }
}

//showing the license information, if applicable.
function renderLicenseSection(license) {
  if(license !== "N/A") {
    return `
## License
Licensed by ${license} license.`;
  } else {
    return `
## License
None.`;
  }
}

//template for the README file.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
  
## Table of Contents
* [Description](#description)
* [Instalation](#instalation)
* [Usage](#usage)
* [Credits](#credits)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Contact](#contact)

## Description
${data.description}

## Installation
${data.instalation}

## Usage
${data.usage}

## Credits
${data.contribution}

## Test Instructions
${data.test}

${renderLicenseSection(data.license)}

## Questions?
Please, feel free to send me an email or contact me on GitHub.

GitHub: [${data.github}](https://github.com/${data.github})

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
