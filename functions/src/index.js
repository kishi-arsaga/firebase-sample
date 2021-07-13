const functions = require("firebase-functions");
const admin = require("firebase-admin");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.createUser = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('users').add({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    imageUrl: ''
  })
})
