const dotenv = require("dotenv");
dotenv.config();
const config = {
  app: {
    port: process.env.PORT || 5000,
    adminUsername: process.env.ADMIN_USERNAME || 'hsnAdmin',
    adminPassword: process.env.ADMIN_PASSWORD || 'admin1234',
  },
  jwt: {
    secret: process.env.JWT_SECRET || "not-jwt-secret",
  },
};

module.exports = config;
