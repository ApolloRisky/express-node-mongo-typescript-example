/* eslint-disable import/first */
import initModuleAlias from 'module-alias';
initModuleAlias();

import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compress from 'compression';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import express, { RequestHandler } from 'express';

import apiRoutes from '@routes';
import mongoose from '@config/mongoose';
import { morganLogFormat } from '@config/vars';
import * as ErrorMiddlewares from '@middlewares/error';

const app = express();

// requests logging
app.use(morgan(morganLogFormat) as RequestHandler);

// parse body params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable cors
app.use(cors() as RequestHandler);

// mound api routes
app.use(apiRoutes);

// if error is not an instanceOf APIError, convert it
app.use(ErrorMiddlewares.converter);

// catch 404 and forward to error handler
app.use(ErrorMiddlewares.notFound);

// connect database
mongoose.connect();

// listen to request
app.listen(3000, () => {
  console.log('server started on port 3000');
});

export default app;
