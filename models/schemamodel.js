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

const artpeiceModel = mongoose.model('artSchema', artSchema);

module.exports = artpeiceModel;



