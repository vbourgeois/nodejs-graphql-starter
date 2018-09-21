
const { logger } = require('src/utils/logger');
const { ObjectType, ObjectInputType } = require('src/schema/type/object');
const { GraphQLInt } = require('graphql');

const CreateObject = {
  type: ObjectType,
  description: 'Create an object and return it',
  args: {
    object: { type: ObjectInputType },
  },
  resolve: (_, { object }) => {
    logger.info('object', object);
    // createObject(object)
    // getObjectById(id)

    return {
      id: 1,
      name: 'test',
    };
  },
};

const UpdateObject = {
  type: ObjectType,
  description: 'Update an academy and return it',
  args: {
    targetId: { type: GraphQLInt },
    object: { type: ObjectInputType },
  },
  resolve: (_, { targetId, object }) => {
    logger.info('targetId', targetId);
    logger.info('object', object);
    // updateObject(targetId, academy);
    // getAcademyById(id);

    return {
      id: 2,
      name: 'data',
    };
  },
};

module.exports.CreateObject = CreateObject;
module.exports.UpdateObject = UpdateObject;
