const admin = require('firebase-admin');
const creditals = require('../adminConfig.js');

admin.initializeApp({
    databaseURL: "https://phonics-tutor.firebaseio.com",
    credential: admin.credential.cert(creditals),
});

const db = admin.firestore();

module.exports = { admin, db };

