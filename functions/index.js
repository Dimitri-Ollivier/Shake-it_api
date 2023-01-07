const functions = require("firebase-functions");

const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

const app = express();

// Routes


admin.initializeApp();

// Export the app to firebase cloud functions
exports.app = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
