//const functions = require("firebase-functions");

import express from "express";

//const express = require('express');
import bodyParser from "body-parser";


const PORT = 9001;
const app  = express();
app.set('view engine','ejs');







app.use(bodyParser.urlencoded({extended: true}));









app.get('/todolist', (req,res)=>{


    res.render('as');
});



















app.get('/', (req,res,next)=>{
    res.send('Hello fucking world  2');
});


app.get('/hello', (req,res,next)=>{
    res.send('yea hello');
});



app.listen(PORT, ()=>{
    console.log('serveris running on port', PORT);
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

//exports.app = functions.https.onRequest(app);
