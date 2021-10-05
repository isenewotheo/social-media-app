const mongoose = require('mongoose');

const Like = new mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    //Likes can be apllied to post, comment and reply
    //am just using postID here to represent post, comment or reply
    postID: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "like",
        required: false
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


module.exports = mongoose.model('Like', Like);