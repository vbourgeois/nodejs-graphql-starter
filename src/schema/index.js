const _ = require('lodash');
const { ViewerType } = require('src/schema/type/viewer');
const { ViewerMutationType } = require('src/schema/mutation/viewer');
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

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    viewer: {
      type: ViewerMutationType,
      resolve: () => _.noop,
    },
  }),
});


const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

module.exports = schema;
