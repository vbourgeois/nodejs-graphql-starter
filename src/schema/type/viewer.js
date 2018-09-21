const { ObjectView } = require('src/schema/type/object');
const { GraphQLObjectType } = require('graphql');

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  description: 'Viewer',

  fields: () => ({
    objects: ObjectView,
  }),
});

module.exports.ViewerType = ViewerType;
