const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const pino = require('express-pino-logger')({
  prettyPrint: {
    levelFirst: true,
  },
});

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(pino);
app.use(helmet());
app.use(compression());
app.use(bodyParser.json({
  limit: '5mb',
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  },
}));
app.use(cors());
app.all('/', (req, res) => res.sendStatus(200));

// app.use(errorMiddleware)

module.exports = app;
