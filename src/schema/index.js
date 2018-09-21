const _ = require('lodash');
const { ViewerType } = require('src/schema/type/viewer');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The query root of GraphQL interface',
  fields: () => ({
    viewer: {
      type: ViewerType,
      resolve: () => _.noop,
    },
  }),
});


const schema = new GraphQLSchema({
  query: queryType,
});

module.exports = schema;
