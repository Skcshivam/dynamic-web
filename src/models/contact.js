const mongoose= require('mongoose')

const contact= mongoose.Schema({
    email : String,
    phone : Number,
    query : String 
})

module.exports= mongoose.model('queries',contact )