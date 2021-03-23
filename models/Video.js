const mongoose = require("mongoose")
// let mongoose = require('../app')
let Schema = mongoose.Schema

let videoSchema = new Schema({

 
    title: {
        type:String,
        maxlength:50
    },
    description: {
            type:String
    },

    filePath : {
        type:String
    },
    fileName: {
        type:String
    }


}, {timestamps: true})

let Video = mongoose.model('Video' , videoSchema);

module.exports = {Video}