// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  let badge;
  switch (license) {
    case "MIT":
      badge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "Apache 2.0":
      badge =
        "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GPL 3.0":
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)";
      break;
    // Add more licenses as needed
    default:
      badge = "";
  }

  return badge;
}

console.log(renderLicenseBadge("MIT")); // Should log the MIT badge markdown
console.log(renderLicenseBadge("Apache 2.0")); // Should log the Apache 2.0 badge markdown
console.log(renderLicenseBadge("")); // Should log an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "[MIT License](https://opensource.org/licenses/MIT)";
      break;
    case "Apache 2.0":
      licenseLink =
        "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL 3.0":
      licenseLink = "[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    // Add more licenses as needed
    default:
      licenseLink = "";
  }

  return licenseLink;
}

console.log(renderLicenseLink("GPL 3.0")); // Should log the GPL 3.0 link markdown
console.log(renderLicenseLink("")); // Should log an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  let licenseInfo;
  switch (license) {
    case "MIT":
      licenseInfo = "This project is licensed under the MIT License.";
      break;
    case "Apache 2.0":
      licenseInfo = "This project is licensed under the Apache License 2.0.";
      break;
    case "GPL 3.0":
      licenseInfo =
        "This project is licensed under the GNU General Public License v3.0.";
      break;
    // Add more licenses as needed
    default:
      licenseInfo = "This project has an unspecified license.";
  }

  return `## License\n\n${licenseInfo}\n`;
}

console.log(renderLicenseSection("MIT")); // Should log the MIT license section
console.log(renderLicenseSection("")); // Should log an empty string

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out to [${data.github}](https://github.com/${
    data.github
  }) or email me at ${data.email}.
`;
}

export default generateMarkdown;
