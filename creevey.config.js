module.exports = {
  storybookUrl: 'http://localhost:6001',
  diffOptions: { threshold: 1 },
  browsers: {
    // due to a creevy bug we need to use the browserName 'opera' for the webkit/safari docker image
    'webkit.desktop': {
      browserName: 'opera',
      viewport: { width: 1366, height: 768 },
      dockerImage: 'browsers/safari:13.0',
      limit: 2,
    },
    'webkit.tablet': {
      browserName: 'opera',
      viewport: { width: 768, height: 1024 },
      dockerImage: 'browsers/safari:13.0',
      limit: 2,
    },
    'webkit.mobile': {
      browserName: 'opera',
      viewport: { width: 360, height: 640 },
      dockerImage: 'browsers/safari:13.0',
      limit: 2,
    },
    'chrome.desktop': {
      browserName: 'chrome',
      viewport: { width: 1366, height: 768 },
      limit: 2,
    },
    'chrome.tablet': {
      browserName: 'chrome',
      viewport: { width: 768, height: 1024 },
      limit: 2,
    },
    'chrome.mobile': {
      browserName: 'chrome',
      viewport: { width: 360, height: 640 },
      limit: 2,
    },
    'firefox.desktop': {
      browserName: 'firefox',
      viewport: { width: 1366, height: 768 },
      limit: 2,
    },
    'firefox.tablet': {
      browserName: 'firefox',
      viewport: { width: 768, height: 1024 },
      limit: 2,
    },
    'firefox.mobile': {
      browserName: 'firefox',
      viewport: { width: 360, height: 640 },
      limit: 2,
    },
  },
};
