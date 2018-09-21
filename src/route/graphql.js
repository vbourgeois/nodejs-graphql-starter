const graphqlHTTP = require('express-graphql');
const express = require('express');
const { formatError } = require('src/utils/error');
const schema = require('src/schema');

const router = express.Router();

const grapqlHandler = graphqlHTTP(() => {
  const startTime = Date.now();
  return {
    schema,
    graphiql: true,
    formatError,
    extensions: () => ({
      runTime: Date.now() - startTime,
    }),
  };
});

router.use('/', grapqlHandler);

module.exports = router;
