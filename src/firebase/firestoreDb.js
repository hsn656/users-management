const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./firebase.secret.json");

initializeApp({
  credential: cert(serviceAccount),
});

getFirestore().settings({
  host: "localhost:8080",
  ssl: false,
});

const firestoreDb = getFirestore();

module.exports = firestoreDb;
