const mongoose = require("mongoose")
// let mongoose = require('../app')
let Schema = mongoose.Schema

let Marker = new Schema({

 
    time: {
        type:Number,
        // maxlength:50
    },
    text: {
            type:String
    },

    val : {
        type:String
    },
    src:{ type:String},

    du : {type:Number}


}, {timestamps: true})

let Markers = mongoose.model('Markers' , Marker);

module.exports = {Markers}