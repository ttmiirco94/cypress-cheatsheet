import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "1b5zq5",
  chromeWebSecurity: false,
  watchForFileChanges: false,
  trashAssetsBeforeRuns: false,
  screenshotOnRunFailure: true,
  video: false,
  retries: 0,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    // Configure your E2E tests here
    baseUrl: 'https://www.demoblaze.com/',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}"
  },
})