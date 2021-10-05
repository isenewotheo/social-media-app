const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList
 } = require("graphql");
const { CommentType } = require("./comment")
const { LikeType } = require("./like")
const query = require("../../db");
const Query = new query();

const PostType = new GraphQLObjectType({
    name: "Post",
    description: "A single post",
    fields: () => ({
        _id: {type: GraphQLNonNull(GraphQLString)},
        userID: {type: GraphQLNonNull(GraphQLString)},
        tags: {type: GraphQLList(GraphQLString)},
        body: {type: GraphQLNonNull(GraphQLString)},
        date: {type: GraphQLNonNull(GraphQLString)},
        modified: {type: GraphQLNonNull(GraphQLString)},
        comments: {
            type: new GraphQLList(CommentType),
            resolve: async (parent) => {
                let comments = await Query.Comment.getComments(parent._id);
                return comments
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

const argsAddPost = {
    userID: {type: GraphQLNonNull(GraphQLString)},
    tags: {type: GraphQLList(GraphQLString)},
    body: {type: GraphQLNonNull(GraphQLString)}
}

module.exports = {PostType, argsAddPost};