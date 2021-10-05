const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} = require("graphql");
const query = require("../../db");
const Query = new query();
// Types import
const {PostType} = require("./post");
const {CommentType} = require("./comment");

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        getPosts: {
            type: new GraphQLList(PostType),
            description: "list of all posts",
            resolve: async () => {
                return  await Query.Post.getPosts();
            }
        },
        getPost: {
            type: PostType,
            description: "get a single post with an id",
            args: {id: {type: GraphQLNonNull(GraphQLString)}},
            resolve: async (parent, args) => {
                let post =  await Query.Post.getPost(args.id)
                return post
            }
        },
        getComment: {
            type: CommentType,
            description: "get a single comment with an id",
            args: {id: {type: GraphQLNonNull(GraphQLString)}},
            resolve: async (parent, args) => {
                return await Query.Comment.getComment(args.id);
            }
        }
    })
})


module.exports = RootQueryType;
