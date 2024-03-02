const mongoose = require('mongoose')

const banner2 = mongoose.Schema({
    heading2: String,
    paragraph2 : String,
    button2 : String,
    Image : String
})

module.exports= mongoose.model("banner2",banner2)