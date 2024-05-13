const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tinyurl.com/mvee9kur',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
