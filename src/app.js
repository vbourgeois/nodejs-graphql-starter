const express = require('express');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// Express configuration
const app = express();

app.set('port', process.env.PORT || 3004);
// app.use(httplog)
app.use(helmet());
app.use(compression());
app.use(bodyParser.json({
  limit: '5mb',
  verify: (req, res, buf) => {
    req.rawBody = buf.toString();
  },
}));
app.use(bodyParser.raw({ limit: '5mb', type: 'audio/wav' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.all('/', (req, res) => res.sendStatus(200));

// app.use(errorMiddleware)

module.exports = app;
