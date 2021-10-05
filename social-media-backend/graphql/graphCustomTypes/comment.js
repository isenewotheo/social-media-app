const { 
    GraphQLObjectType,
    GraphQLList
} = require("graphql");
const gPT = require("./graphPrimitiveTypes");
const {ReplyType} = require("./reply");
const query = require("../../db");
const Query = new query();


const CommentType = new GraphQLObjectType({
    name: "comments",
    description: "A single comment",
    fields: () => ({
        _id: gPT.nNST,
        userID: gPT.nNST,
        postID: gPT.nNST,
        body: gPT.nNST,
        date: gPT.nNST,
        modified: gPT.nNST,
        replies: {
            type: new GraphQLList(ReplyType),
            resolve: async (parent) => {
                let replies = await Query.Reply.getReplies(parent._id);
                return replies
            }
        }
    })
})

const argsAddComment = {
    userID: gPT.nNST,
    postID: gPT.nNST,
    body: gPT.nNST
}

module.exports = {CommentType, argsAddComment};