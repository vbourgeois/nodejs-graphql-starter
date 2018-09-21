const { CreateObject, UpdateObject } = require('src/schema/mutation/object');

const { GraphQLObjectType } = require('graphql');

const ViewerMutationType = new GraphQLObjectType({
  name: 'ViewerMutation',
  fields: () => ({
    createObject: CreateObject,
    updateObject: UpdateObject,
  }),
});


module.exports.ViewerMutationType = ViewerMutationType;
