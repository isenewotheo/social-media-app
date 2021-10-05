const {graphqlHTTP} = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const RootQueryType = require("./graphCustomTypes/rootQueryType");
const RootMutationType = require("./graphCustomTypes/rootMutationType");


const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

module.exports = graphqlHTTP({
    schema: schema,
    graphiql: true
})
