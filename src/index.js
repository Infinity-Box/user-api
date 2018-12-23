import express from 'express';

import constants from './config/constants';
import './config/database';
import middlewaresConfig from './config/middlewares';

import apiRoutes from './modules';

const app = express();

middlewaresConfig(app)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

apiRoutes(app);

port = process.env.PORT

app.listen(port err => {
    if (err) {
        throw err;
    } else {
      console.log(`
        Server running on ${port}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great
      `)
    }
})
