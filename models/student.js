const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    roll_no:{
        type:Number,
        required:true,
    },
    mobile_no:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("Register", studentSchema);