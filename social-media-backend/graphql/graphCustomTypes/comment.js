const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList
} = require("graphql");
const {ReplyType} = require("./reply");
const {LikeType} = require("./like");
const query = require("../../db");
const Query = new query();


const CommentType = new GraphQLObjectType({
    name: "Comment",
    description: "A single comment",
    fields: () => ({
        _id: {type: GraphQLNonNull(GraphQLString)},
        userID: {type: GraphQLNonNull(GraphQLString)},
        postID: {type: GraphQLNonNull(GraphQLString)},
        body: {type: GraphQLNonNull(GraphQLString)},
        date: {type: GraphQLNonNull(GraphQLString)},
        modified: {type: GraphQLNonNull(GraphQLString)},
        replies: {
            type: new GraphQLList(ReplyType),
            resolve: async (parent) => {
                let replies = await Query.Reply.getReplies(parent._id);
                return replies
            }
        },
        likeCount: {
            type: GraphQLInt,
            resolve: async (parent) => {
                let likes = await Query.Like.getLikes(parent._id);
                return likes.length
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

const argsAddComment = {
    userID: {type: GraphQLNonNull(GraphQLString)},
    postID: {type: GraphQLNonNull(GraphQLString)},
    body: {type: GraphQLNonNull(GraphQLString)}
}

module.exports = {CommentType, argsAddComment};