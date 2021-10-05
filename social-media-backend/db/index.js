require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const usersQuery = require("./usersQuery");
const postsQuery = require("./postsQuery");
const commentsQuery = require("./commentsQuery");
const repliesQuery = require("./repliesQuery");
const likesQuery = require("./likesQuery");
mongoose.connect('mongodb://localhost/SMA', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log('there was an error'));
db.once('open', () => console.log('successfully connected to db'));

class Query {
    User = new usersQuery();
    Post = new postsQuery();
    Comment = new commentsQuery();
    Reply = new repliesQuery();
    Like = new likesQuery();
}
module.exports = Query;