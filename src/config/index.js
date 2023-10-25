const dotenv = require("dotenv");
dotenv.config();
const config = {
  app: {
    port: process.env.PORT || 5000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "not-jwt-secret",
  },
};

module.exports = config;
