const mongoose = require('mongoose')

const Experience = new mongoose.Schema({

    employer:{type:String},
    description:{type:String},
    startDate:{type:String},
    endDate:{type:String},
    place:{type:String},
    company:{type:String}

})


module.exports = mongoose.model('Experience',Experience )