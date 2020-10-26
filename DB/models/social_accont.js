const mongoose = require('mongoose')

const Social = new mongoose.Schema({
    name: { type: String },
    img: { type: String },
    url: { type: String }
})


module.exports = mongoose.model('Social', Social)