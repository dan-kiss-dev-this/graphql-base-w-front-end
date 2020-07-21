// to pass schema use gql, its a tag function, aka a string that contains graphql info
const { ApolloServer, gql } = require('apollo-server');

// below is a simple graphql schema
// schema is root element which is entry point
const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String,
  }
`

//resolver object is object literal which matches type def above
// resolvers have a Query property which matches type Query in the definition above
const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world'
  }
}

// server
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 9000 })
  .then((serverInfo => console.log(`Server is running at ${serverInfo.url}`)))