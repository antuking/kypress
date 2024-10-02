# Cypress.io for assignment
Using Cypress to handle automation tests for Raksul.

<img src="https://static-00.iconduck.com/assets.00/cypress-icon-512x511-29zvfts6.png" width="250" height="250">

With **Cypress**, you can easily create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

## Project Structure

``` shell
|-- root
    |-- cypress (organize the test files and configuration)
        |-- e2e
        |-- fixtures
        |-- support
    |-- doc (test case design image)
    |-- .gitignore  
    |-- cypress.config.js (configuration file for project)
    |-- package.json
    |-- README.md
    |-- reporter-config.json (mocha + junit reporter configuration for project)
    |-- yarn.lock
```

## Installation

Install all dependencies from **package.json**

## Running Tests

### Registration scenario

``
yarn test:registration
``

### Naming conventions

| Locator               | Abbreviation | Example        |
| --------------------- | ------------ | -------------- |
| Text box, Input field | txt          | txtUsername    |
| Text area             | txa          | txaDescription |
| Button                | btn          | btnSubmit      |
| Label, Text           | lbl          | lblUserId      |
| Dropdown list         | ddl          | ddlProvince    |
| Image                 | img          | imgProfile     |
| Link                  | lnk          | lnkUserDetail  |
| Table                 | tbl          | tblUserList    |
| Checkbox              | cbk          | cbkROI         |
| Radio                 | rdo          | rdoROI         |
| List Box              | lbx          | lbxROI         |

### TODO List
* Add CI Workflow
* Consider ES6 (alias + custom commands) instead of POM
* Integrate with Report server
* Integrate with Test Management Tool
