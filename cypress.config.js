const {defineConfig} = require('cypress')
    module.exports = defineConfig({
        e2e: {
          baseUrl: "https://kasirdemo.belajarqa.com",
          specPattern: "cypress/testsuite/",
          supportFile: false,
          chromeWebSecurity : false
        }
})