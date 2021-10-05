const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList
} = require("graphql");
const {LikeType} = require("./like");
const query = require("../../db");
const Query = new query();

const ReplyType = new GraphQLObjectType({
    name: "Reply",
    description: "A single reply",
    fields: () => ({
        _id: {type: GraphQLNonNull(GraphQLString)},
        userID: {type: GraphQLNonNull(GraphQLString)},
        commentID: {type: GraphQLNonNull(GraphQLString)},
        body: {type: GraphQLNonNull(GraphQLString)},
        date: {type: GraphQLNonNull(GraphQLString)},
        modified: {type: GraphQLNonNull(GraphQLString)},
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

const argsAddReply = {
    userID: {type: GraphQLNonNull(GraphQLString)},
    commentID: {type: GraphQLNonNull(GraphQLString)},
    body: {type: GraphQLNonNull(GraphQLString)}
}

module.exports = {ReplyType, argsAddReply};