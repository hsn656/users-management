
const { logger } = require("./Logger");
const app = require("./app");
const config = require("./config");

const port = config.app.port;

app.listen(port, () => {
    logger.info(`server is running on http://localhost:${port}`);
});
