const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB)
    .then(()=>console.log("DATABASE Conected successfully ..."))
    .catch((error)=>console.log("Error"+error.message))