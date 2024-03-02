const mongoose=require("mongoose")

const banner3 = mongoose.Schema({
    heading3 :String,
    paragraph3 : String,
    button3 : String,
    Image2 : String
})

module.exports = mongoose.model("banner3",banner3)