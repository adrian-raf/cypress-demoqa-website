const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    baseUrl: "https://demoqa.com",

    setupNodeEvents(on, config) {
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