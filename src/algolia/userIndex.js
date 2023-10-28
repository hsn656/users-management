const algoliasearch = require("algoliasearch");
const config = require("../config");

const client = algoliasearch.default(config.algolia.appId, config.algolia.adminKey);
const usersIndex = client.initIndex("users");

usersIndex.setSettings({
    attributesForFaceting: [
        'searchable(username)',
        'searchable(email)'
    ]
})

module.exports = usersIndex;
