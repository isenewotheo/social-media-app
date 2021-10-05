const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    postID: {
        type: String,
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
        required: true
    }
});


module.exports = mongoose.model('Comment', Comment);