const {
    GraphQLObjectType,
    GraphQLList
} = require("graphql");
const query = require("../../db/index");
const Query = new query();

// Types import
const {PostType, argsAddPost} = require("./post");
const {CommentType, argsAddComment} = require("./comment");
const {ReplyType, argsAddReply} = require("./reply");
const {LikeType, argsAddLike} = require("./like");


const RootQueryType = new GraphQLObjectType({
    name: "Mutations",
    description: "Root Mutation",
    fields: () => ({
        addPost: {
            type: PostType,
            description: "add a new post",
            args: argsAddPost,
            resolve: async (parent, args) => {
                let postDetails = {
                    userID: args.userID,
                    tags: args.tags,
                    body: args.body,
                    date: Date.now(),
                    modified: Date.now()
                };
                try {
                    let post = await Query.Post.addPost(postDetails)
                    return post;
                } catch (error) {
                    return {error};            
                }
            }
        },
        addComment: {
            type: CommentType,
            description: "add a new comment",
            args: argsAddComment,
            resolve: async (parent, args) => {
                let commentDetails = {
                    userID: args.userID,
                    postID: args.postID,
                    body: args.body,
                    date: Date.now(),
                    modified: Date.now()
                };
                return await Query.Comment.addComment(commentDetails)
            }
        },
        addReply: {
            type: ReplyType,
            description: "add a new reply",
            args: argsAddReply,
            resolve: async (parent, args) => {
                let replyDetails = {
                    userID: args.userID,
                    commentID: args.commentID,
                    body: args.body,
                    date: Date.now(),
                    modified: Date.now()
                };
                return await Query.Reply.addReply(replyDetails)
            }
        },
        addLike: {
            type: LikeType,
            description: "add a new like",
            args: argsAddLike,
            resolve: async (parent, args) => {
                let likeDetails = {
                    userID: args.userID,
                    postID: args.postID,
                    type: args.type,
                    date: Date.now(),
                    modified: Date.now()
                };
                return await Query.Like.addLike(likeDetails)
            }
        }
    })
})


module.exports = RootQueryType;
