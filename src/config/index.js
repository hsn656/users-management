const dotenv = require("dotenv");
dotenv.config();
const config = {
  app: {
    port: process.env.PORT || 5000,
    adminUsername: process.env.ADMIN_USERNAME || "hsnAdmin",
    adminPassword: process.env.ADMIN_PASSWORD || "admin1234",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "not-jwt-secret",
  },
  algolia: {
    appId: process.env.ALGOLIA_APP_ID || "",
    searchKey: process.env.ALGOLIA_SEARCH_KEY || "",
    adminKey: process.env.ALGOLIA_ADMIN_KEY || "",
  },
  firebase: {
    env: process.env.FIRE_BASE_ENV || "emulators",
  },
};

module.exports = config;
