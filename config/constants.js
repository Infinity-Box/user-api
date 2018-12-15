const devConfig = {
  MONGO_URL: 'mongodb://localhost/makenodejsapi-dev',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/makenodejsapi-dev',
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/makenodejsapi-dev',
};

const defaultConfig = {
  PORT: process.env.PORT || 4000;
}


function encConfig(env) {
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
