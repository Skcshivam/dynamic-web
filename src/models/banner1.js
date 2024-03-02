const mongoose= require('mongoose')

const banner1 = mongoose.Schema({
    heading1 : String,
    paragraph1 : String,
    button1 : String
})


module.exports= mongoose.model('banner1',banner1)