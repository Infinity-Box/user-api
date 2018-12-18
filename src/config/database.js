import mongoose from 'mongoose';
import constants from './constants';

//Remove the warning with Promise
mongoose.Promise = global.Promise;

const isProd = process.env.NODE_ENV === 'production';

//Connect the db with the url provide
try {
  mongoose.connect(constants.MONGO_URL);
} catch (err) {
  if (isProd) {
    console.log("Database Not Found in Production")
  } else{
    console.log("Database Not Found")
  }
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  })
