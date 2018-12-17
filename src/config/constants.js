const devConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
  JWT_SECRET: 'thisisasecret',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
};

const prodConfig = {
  MONGO_URL: 'http://138.197.215.135',
};

const defaultConfig = {
  PORT: process.env.PORT || 6000
}


function envConfig(env) {
  switch(env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    case 'production'
      return prodConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
