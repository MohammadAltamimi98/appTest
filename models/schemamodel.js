'use strict';
const mongoose = require('mongoose');

const artSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        trim: true
    },
    thumbnail: String,
    slug: {
        type: String,
        unique: true,
        trim: true
    },

});

const artmodel = mongoose.model('artmodelmongoose', artSchema);

module.exports = { artmodel };