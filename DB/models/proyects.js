const mongoose = require('mongoose');

const poroyect = new mongoose.Schema({

    Name: { type: String },
    description: { type: String },
    url: { type: String }

});

module.exports = mongoose.model('Proyects', poroyect);