const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLObjectType 
} = require("graphql");

const LikeType = new GraphQLObjectType({
    name: "Like",
    description: "A single like",
    fields: () => ({
        _id: {type: GraphQLNonNull(GraphQLString)},
        userID: {type: GraphQLNonNull(GraphQLString)},
        postID: {type: GraphQLNonNull(GraphQLString)},
        type: {type: GraphQLNonNull(GraphQLString)},
        date: {type: GraphQLNonNull(GraphQLString)},
        modified: {type: GraphQLNonNull(GraphQLString)},
    })
})

const argsAddLike = {
    userID: {type: GraphQLNonNull(GraphQLString)},
    postID: {type: GraphQLNonNull(GraphQLString)},
    type: {type: GraphQLNonNull(GraphQLString)}
}

module.exports = {LikeType, argsAddLike};