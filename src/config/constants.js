const devConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/infinityapi-dev',
};

const prodConfig = {
  MONGO_URL:
};

const defaultConfig = {
  PORT: process.env.PORT || 5000
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
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
