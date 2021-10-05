const Comment = require("../models/comment");

class QueryComments {
    // adds a new comment to the database////////////////////////////////////////////
    async addComment(details){
        let comment = new Comment({...details});
        try {
            const newComment = await comment.save();
            return newComment;
        } catch (error) {
            return error;
        }    
    }

    // gets all comments from a post /////////////////////////////////////////////////
    async getComments(postID){
        try {
            let _comments = await Comment.find({postID});
            let comments = [];
            Array(_comments).forEach(comment => {
                comments.push(comment);
            });
            return comments[0]
        } catch (error) {
            return error
        }
    }
    
    // gets a single comment/////////////////////////////////////////////////
    async getComment(id){
        try {
            let comment = await Comment.findOne({_id: id});
            comment =  comment._doc
            return comment;
        } catch (error) {
            return error;
        }
    }
}

// let q = new QueryPosts();
// q.getTagPosts('vue').then(res => console.log(res))

module.exports = QueryComments;