module.exports = {
  workers: 1,

  use: {
    headless: false,

    launchOptions: {
      slowMo: 800,
    },

    // ✅ ALWAYS screenshot
    screenshot: 'on',

    // ✅ ALWAYS video
    video: 'on',

    // ✅ ALWAYS trace
    trace: 'on',
  },

  reporter: 'html',

  timeout: 30000,

  expect: {
    timeout: 10000,
  },
};