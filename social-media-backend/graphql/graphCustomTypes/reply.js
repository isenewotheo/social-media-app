const { GraphQLObjectType } = require("graphql");
const gPT = require("./graphPrimitiveTypes");

const ReplyType = new GraphQLObjectType({
    name: "Reply",
    description: "A single reply",
    fields: () => ({
        _id: gPT.nNST,
        userID: gPT.nNST,
        commentID: gPT.nNST,
        body: gPT.nNST,
        date: gPT.nNST,
        modified: gPT.nNST
    })
})

const argsAddReply = {
    userID: gPT.nNST,
    commentID: gPT.nNST,
    body: gPT.nNST
}

module.exports = {ReplyType, argsAddReply};