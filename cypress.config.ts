import { defineConfig } from 'cypress';

const webpack = require('@cypress/webpack-preprocessor');

require('dotenv').config();

export default defineConfig({
  video: false,
  viewportHeight: 800,
  viewportWidth: 1200,
  defaultCommandTimeout: 10000,
  retries : {
    runMode: 1,
    openMode : 1
  },
  e2e: {
    specPattern: 'cypress/e2e/tests/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/e2e.{ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const options = {
        webpackOptions: require('./webpack.config'),
        watchOptions: {}
      };

      on('file:preprocessor', webpack(options));
      on('before:run', ()=>{
        console.log("Compile successfully!!!")
      });

      config.env = config.env || {};

      config.env.BASE_URL= process.env.BASE_URL
      config.env.BASE_UR= process.env.BASE_DOMAIN;
      config.env.BASE_2ND_LEVEL_DOMAIN= process.env.BASE_2ND_LEVEL_DOMAIN;
      return config;
    },
  }
});
