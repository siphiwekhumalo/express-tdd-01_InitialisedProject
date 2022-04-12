const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
    res.json("Hello world");



});

app.listen(3000, () => {
    console.log("Server is now running");


});