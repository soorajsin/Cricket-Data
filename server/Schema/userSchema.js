const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
});

const userdb = mongoose.model(userSchema, "users");
module.exports = userdb;
