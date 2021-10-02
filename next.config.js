// const withTM = require('next-transpile-modules')(['react-firebaseui']);

module.exports = (mode) => ({
  reactStrictMode: true,
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    FIREBASE_KEY: process.env.FIREBASE_KEY,
    FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_DATBASE_URL: process.env.FIREBASE_DATBASE_URL,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    APP_URL: process.env.APP_URL,
  },
});
