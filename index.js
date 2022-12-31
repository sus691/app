//const functions = require("firebase-functions");

import express from "express";

//const express = require('express');
import bodyParser from "body-parser";


const PORT = 9000;
const app  = express();
app.set('view engine', 'ejs');



import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/fruitsDB");



let day = "";

let items  = ["Buy food", "Make food", "Eat food"];
let workitems = ["hi", "bye"]  


app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/todolist", function(req, res){

    let today = new Date();
    let currentDay = today.getDay();

    let options = {
        weekday : "long", 
        day: "numeric",
        month: "long"
    }; 

    day = today.toLocaleDateString("en-US", options);    
    
    res.render("list", {listtitle:day, newlistitems: items});
    
});


app.get("/work", function(req, res){

    res.render("list", {listtitle: "Work list", newlistitems:workitems});
 
});







app.post("/", function(req, res){
    
    let item = req.body.newitem;

    console.log(req.body.list);

    if(req.body.list === "Work"){

        workitems.push(item);
        res.redirect("work");

    } else {

        items.push(item);
        res.redirect("/");

    };



});

 
app.post("/work", function(req, res){

    let item = req.body.newitem;
    workitems.push(item);
    res.render("/work",{listtitle: "Work list", newlistitems:workitems});

});
























app.get('/', (req,res,next)=>{
    res.send('Hello fucking world ');
});




app.listen(PORT, ()=>{
    console.log('serveris running on port', PORT);
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

//exports.app = functions.https.onRequest(app);
