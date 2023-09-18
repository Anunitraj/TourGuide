const mongoose =require('mongoose');

const dataschema =new mongoose.Schema({


    datetime:{
        required: true,
        type:String
    },

name:{
    required: true,
    type:String
},

email:{
    required: true,
    type:String
},
destination:{
    required: true,
    type:String
}




})

module.exports = mongoose.model('Student',dataschema);