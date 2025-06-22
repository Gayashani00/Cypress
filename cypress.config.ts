const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qaapp.xyicon.com',
    defaultCommandTimeout: 10000,
    // other options...
  },
});

