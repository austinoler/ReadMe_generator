function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'BSD 3-Clause') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
  } else {
    return ''; // Empty string for cases where there's no license selected
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3-Clause') {
    return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
  } else {
    return ''; // Empty string for cases where there's no license selected
  }
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the terms of the ${license} license. See the [LICENSE](${renderLicenseLink(license)}) file for more details.`;
  } else {
    return ''; // Empty string for cases where there's no license selected
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
