const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt,
} = require("graphql");


// GraphQLNonNull(GraphQLString)
const gPT = {
    nNST : {type: GraphQLNonNull(GraphQLString)},
    nNIT : {type: GraphQLNonNull(GraphQLInt)},
    nIT : {type: GraphQLInt},
    gLST: {type: new GraphQLList(GraphQLString)}
}

module.exports = gPT;