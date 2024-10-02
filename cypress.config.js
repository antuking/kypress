const { defineConfig } = require("cypress");

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  fixturesFolder: 'cypress/fixtures',
  video: false,
  viewportHeight: 800,
  viewportWidth: 1200,
  defaultCommandTimeout: 5000,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  retries : {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode : 1
  },

  e2e: {
    specPattern	: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile : 'cypress/support/e2e.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
