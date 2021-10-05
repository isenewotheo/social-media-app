const mongoose = require('mongoose');

const Reply = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    commentID: {
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
        default: Date.now(),
        required: true
    }
});


module.exports = mongoose.model('Reply', Reply);