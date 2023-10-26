const algoliasearch = require("algoliasearch");
const config = require("../config");

const client = algoliasearch.default(config.algolia.appId, config.algolia.searchKey);
const usersIndex = client.initIndex("users");

module.exports = usersIndex;
