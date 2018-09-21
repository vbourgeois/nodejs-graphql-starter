const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const ObjectFields = {
  name: { type: GraphQLString },
};

const ObjectType = new GraphQLObjectType({
  name: 'Object',
  description: 'Object',

  fields: () => ({
    ...ObjectFields,
    id: { type: GraphQLInt },
  }),
});

const ObjectCollection = new GraphQLList(ObjectType);

const SearchObjectType = new GraphQLObjectType({
  name: 'SearchObject',
  description: 'Search Object',

  fields: () => ({
    total: { type: GraphQLInt },
    hits: { type: ObjectCollection },
  }),
});

const ObjectView = {
  type: SearchObjectType,
  args: {
    query: { type: GraphQLString },
    ids: { type: new GraphQLList(GraphQLInt) },
  },
  resolve: () => ({
    hits: [{
      id: 1,
      name: 'some data',
    }],
    total: 1,
  }),
};

module.exports.ObjectView = ObjectView;
