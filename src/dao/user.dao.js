const firestoreDb = require("../firebase/firestoreDb")

const findByEmail = async ({email})=>{
    const snapshot  = await firestoreDb.collection('users').where('email','==',email).get();
    return snapshot.docs.length ? snapshot.docs[0] : null;
}

const findByUsername = async ({username})=>{
    const snapshot  = await firestoreDb.collection('users').where('username','==',username).get();
    return snapshot.docs.length ? snapshot.docs[0] : null;
}

const create = async ({ email, username, password, age })=>{
    const createdUserRef = await firestoreDb.collection('users').add({
        email,
        username,
        password,
        age
    });

    return {
        id: createdUserRef.id,
    }
}

module.exports = {
    findByEmail,
    findByUsername,
    create
}