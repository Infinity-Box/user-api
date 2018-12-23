import express from 'express';
import path from 'path';

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

// let port = process.env.PORT
//
// app.listen(port, err => {
//     if (err) {
//         throw err;
//     } else {
//       console.log(`
//         Server running on ${port}
//         ---
//         Running on ${process.env.NODE_ENV}
//         ---
//         Make something great
//       `)
//     }
// })

import http from 'http'

// http.createServer(function (req, res) { res.writeHead(200, {'Content-Type': 'text/plain'}); res.send('it is running\n'); }).listen(process.env.PORT || 5000);


handle = (req, res) -> res.end "hit"

server = http.createServer handle

server.listen process.env.PORT || 5000
