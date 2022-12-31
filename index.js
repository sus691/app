//const functions = require("firebase-functions");

import express from "express";

//const express = require('express');
import bodyParser from "body-parser";


const PORT = 9000;
const app  = express();
app.set('view engine', 'ejs');




let day = "";

let items  = ["Buy food", "Make food", "Eat food"];












app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static("public"));








app.get('/todolist', (req,res,next)=>{

    let day = "sunday";

    let items  = ["Buy food", "Make food", "Eat food"];  
    
    res.render("list", {listtitle:day, newlistitems: items});
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
