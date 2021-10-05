const { GraphQLObjectType } = require("graphql");
const gPT = require("./graphPrimitiveTypes");

const LikeType = new GraphQLObjectType({
    name: "Like",
    description: "A single like",
    fields: () => ({
        _id: gPT.nNST,
        userID: gPT.nNST,
        postID: gPT.nNST,
        type: gPT.nNST,
        date: gPT.nNST,
        modified: gPT.nNST,
    })
})

const argsAddLike = {
    userID: gPT.nNST,
    postID: gPT.nNST,
    type: gPT.nNST
}

module.exports = {LikeType, argsAddLike};