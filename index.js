const serverless  = require('serverless-http');
const express     = require('express');
const app         = express();
const router      = express.Router();
const routes      = require('./routes');
const handlers    = require('./middlewares');
const uuidv1      = require('uuid/v1');
const bodyParser  = require('body-parser');

routes(router);

app.use(handlers.enableCors);

if(process.env.LOCAL) {
  app.use('/', router);
} else {
  app.use('/'+process.env.STAGE, router);
}
app.use(handlers.notFound);
app.use(handlers.serverError);

module.exports.handler = serverless(app, {
  request: function (request, event, context) {
    request.context = event.requestContext;
    request.id = uuidv1();
  }
});