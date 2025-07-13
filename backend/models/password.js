const mongoose = require("mongoose");

const passwordSchema = new mongoose.Schema({
    domain:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    iv:{
        type:String,
        required: true
    },
    encryptedPass:{
        type:String,
        required: true
    }

},{timestamps : true});

const Pass =  mongoose.models.Pass || mongoose.model("Pass",passwordSchema);

module.exports = Pass;