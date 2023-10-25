const functions = require("firebase-functions");
const algoliasearch = require("algoliasearch");

require("dotenv").config();

const APP_ID = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;

const algoliaClient = algoliasearch.default(APP_ID, ADMIN_KEY);
const usersIndex = algoliaClient.initIndex("users");

exports.addToUsersIndex = functions.firestore
  .document("users/{userId}")
  .onCreate((snapshot) => {
    const data = snapshot.data();
    const objectID = snapshot.id;

    return usersIndex.saveObject({ ...data, objectID });
  });

exports.updateUsersDoc = functions.firestore
  .document("users/{userId}")
  .onUpdate((change) => {
    const newData = change.after.data();
    const objectID = change.after.id;

    return usersIndex.saveObject({ ...newData, objectID });
  });

exports.deleteUsersDoc = functions.firestore
  .document("users/{userId}")
  .onDelete((snapshot) => usersIndex.deleteObject(snapshot.id));
