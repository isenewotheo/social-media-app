const Reply = require("../models/reply");

class QueryReplies {
    // adds a new reply to the database////////////////////////////////////////////
    async addReply(details){
        let reply = new Reply({...details});
        try {
            const newReply = await reply.save();
            return newReply;
        } catch (error) {
            return error;
        }    
    }

    // gets all the replies from a comment/////////////////////////////////////////////////
    async getReplies(commentID){
        try {
            let _replies = await Reply.find({commentID});
            let replies = [];
            Array(_replies).forEach(reply => {
                replies.push(reply);
            });
            return replies[0]
        } catch (error) {
            return error
        }
    }
    
    // gets a single reply/////////////////////////////////////////////////
    async getReply(id){
        try {
            let reply = await Reply.findOne({_id: id});
            reply =  reply._doc
            return reply;
        } catch (error) {
            return error;
        }
    }
}

// let q = new QueryPosts();
// q.getTagPosts('vue').then(res => console.log(res))

module.exports = QueryReplies;