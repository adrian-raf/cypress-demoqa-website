const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'DemoQA Web Test',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,
  viewportWidth: 1920,
  viewportHeight: 1080,


  e2e: {
    baseUrl: "https://demoqa.com",

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)
      return config
    },
  },
  blockHosts: [
    "*.googlesyndication.com",
    "*.doubleclick.net",
    "*.googletagservices.com",
    "*.google-analytics.com",

  ],
});