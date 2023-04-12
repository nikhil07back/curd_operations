const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({ 
    title : { 
        type : "string" , 
        required : [true , "please make sure tiitle is valid"]
    } ,
    description : { 
        type : "string" , 
        required : [true , "please make sure descripton is true is good for health "]
    } ,
}, { 
    timestamps  : true 
})

module.exports = mongoose.model('Todo', todoSchema )