const { 
    GraphQLObjectType,
    GraphQLList
 } = require("graphql");
const gpt = require("./graphPrimitiveTypes");
const { CommentType } = require("./comment")
const { LikeType } = require("./like")
const query = require("../../db");
const Query = new query();

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "A single post",
    fields: () => ({
        _id: gpt.nNST,
        userID: gpt.nNST,
        tags: gpt.gLST,
        body: gpt.nNST,
        date: gpt.nNST,
        modified: gpt.nNST,
        likeCount: {
            type: gpt.nIT,
            resolve: async (parent) => {
                let likes = await Query.Like.getLikes(parent._id);
                return likes.length
            }
        },
        comments: {
            type: new GraphQLList(CommentType),
            resolve: async (parent) => {
                let comments = await Query.Comment.getComments(parent._id);
                return comments
            }
        },
        likes: {
            type: new GraphQLList(LikeType),
            resolve: async (parent) => {
                let likes = await Query.Like.getLikes(parent._id);
                return likes;
            }
        }
    })
})

const argsAddPost = {
    userID: gpt.nNST,
    tags: gpt.gLST,
    body: gpt.nNST
}

module.exports = {PostType, argsAddPost};