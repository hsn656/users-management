const firestoreDb = require("../firebase/firestoreDb");

const findByEmail = async ({ email }) => {
  const snapshot = await firestoreDb
    .collection("users")
    .where("email", "==", email)
    .get();
  return snapshot.docs.length
    ? { id: snapshot.docs[0].id, ...snapshot.docs[0].data() }
    : null;
};

const findByUsername = async ({ username }) => {
  const snapshot = await firestoreDb
    .collection("users")
    .where("username", "==", username)
    .get();
  return snapshot.docs.length
    ? { id: snapshot.docs[0].id, ...snapshot.docs[0].data() }
    : null;
};

const findById = async ({ userId }) => {
  const doc = await firestoreDb.collection("users").doc(userId).get();
  return doc.data();
};

const create = async ({ email, username, password, age }) => {
  const createdUserRef = await firestoreDb.collection("users").add({
    email,
    username,
    password,
    age,
  });

  return {
    id: createdUserRef.id,
  };
};

const update = async (userId, { email, username, age }) => {
  await firestoreDb.collection("users").doc(userId).update({
    email,
    username,
    age,
  });
  return { message: "success" };
};

const isUpdatedEmailUnique = async ({ userId, email }) => {
  const snapshot = await firestoreDb
    .collection("users")
    .where("email", "==", email)
    .get();

  if (snapshot.docs.length) {
    return snapshot.docs[0].id === userId;
  }

  return true;
};

const isUpdatedUsernameUnique = async ({ userId, username }) => {
  const snapshot = await firestoreDb
    .collection("users")
    .where("username", "==", username)
    .get();

  if (snapshot.docs.length) {
    return snapshot.docs[0].id === userId;
  }

  return true;
};

module.exports = {
  findByEmail,
  findByUsername,
  findById,
  create,
  update,
  isUpdatedEmailUnique,
  isUpdatedUsernameUnique,
};
