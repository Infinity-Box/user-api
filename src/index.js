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


app.listen(process.env.PORT, err => {
    if (err) {
        throw err;
    } else {
      console.log(`
        Server running on ${process.env.PORT}
        ---
        Running on ${process.env.NODE_ENV}
        ---
        Make something great
      `)
    }
})
