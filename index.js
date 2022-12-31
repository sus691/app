//const functions = require("firebase-functions");



const express = require('express');
const PORT = 3000;
const app  = express();

app.get('/', (req,res,next)=>{
    res.send('welcome ');
});




app.listen(PORT, ()=>{
    console.log('serveris running on port', PORT);
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

//exports.app = functions.https.onRequest(app);
