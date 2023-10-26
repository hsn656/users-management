const { error } = require("winston");
const { logger } = require("./Logger");
const app = require("./app");
const config = require("./config");
const { seedAdminUser } = require("./dao/user.dao");

const port = config.app.port;

seedAdminUser()
  .then(() => {
    app.listen(port, () => {
      logger.info(`server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    logger.error(err.message);
  });
