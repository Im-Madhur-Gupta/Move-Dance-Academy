const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));
app.use("/static",express.static("static"));

app.get("/",(req,res)=>{
    const params = {}
    res.status(200).render("home.pug",params)
});
app.get("/contact",(req,res)=>{
    const params = {}
    res.status(200).render("contact.pug",params)
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening on http://localhost:${port}`);