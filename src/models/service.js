const mongoose = require('mongoose')

const service = mongoose.Schema({
    Icon : String,
    title : String,
    description : String,
    linkText : String,
    link : String
})

module.exports = mongoose.model("service",service)