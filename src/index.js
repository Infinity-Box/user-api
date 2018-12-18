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

const isProd = process.env.NODE_ENV === 'production';

app.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else if (isProd) {
      console.log(`
        Server running on Mlab Database
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great
      `)
    }
    else {
      console.log(`
        Server running on Mlab Database
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great
      `)
    }
})
