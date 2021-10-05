const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    modified: {
        type: Date,
        default: Date.now(),
        required: true
    }
});


module.exports = mongoose.model('Post', Post);