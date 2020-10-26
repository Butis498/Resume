const mongoose = require('mongoose')

const Skill = new mongoose.Schema({
    skill: {type: String},
    level: {type:String}
})

module.exports = mongoose.model('Skill', Skill);