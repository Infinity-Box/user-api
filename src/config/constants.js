const devConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
};

const prodConfig = {
  MONGO_URL:'mongodb://jazz2900:awe123@ds135844.mlab.com:35844/user-api'
};


function envConfig(env) {
  switch(env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...envConfig(process.env.NODE_ENV),
};
