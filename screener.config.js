module.exports = {
  projectRepo: 'bbc/psammead',
  storybookConfigDir: '.storybook',
  storybookStaticDir: '.storybook/static',
  apiKey: process.env.SEC_SCREENER_API_KEY,
  resolutions: ['370x640', '768x1024', '1366x768'],
  browsers: [
    {
      browserName: 'chrome',
      version: '87.0',
    },
    {
      browserName: 'firefox',
      version: '83.0',
    },
    {
      browserName: 'safari',
      version: '13.1',
    },
  ],
  sauce: {
    username: process.env.SEC_SAUCE_USERNAME,
    accessKey: process.env.SEC_SAUCE_ACCESS_KEY,
    maxConcurrent: 50,
  },
};
