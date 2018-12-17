# user-api

user login api complete with authentication & authorization that contains these user parameters {
email

## Getting Started

Tips: LocalHost is set on Port 5000

### Prerequisites

- Basic Knowledge of CRUD Routing
- Basic Knowledge of Node.js & Express
- Basic Knowledge of npm or yarn packaging system
- Basic Knowledge of MongoDB
- Basic Knowledge of Babel & Webpack

**Helpful Knowledge**

- Basic Knowledge of Asynchronous Systems & Promises in Javascript


#### Installing

```
yarn install
yarn start
```

You can also use npm instead of yarn.


### Running The Database on Local Host

Step 1:
```
mongod
```


Step 2:

Open new console tab and run:
```
mongo
```

### Running The Database

**In the src/config/constants.js customized your databases to link to where you want.**

```
const devConfig = {
  MONGO_URL: 'mongodb://localhost/letmebeme',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/letmebeme',
};

const prodConfig = {
  MONGO_URL: 'http://111.222.333.444',
};

const defaultConfig = {
  PORT: process.env.PORT || 5000
}
```


### Running Developer Build

```
yarn dev:build
yarn dev
```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

If Deploying the API live make sure the dist/index.bundle.js contains the most up to date info for the deployment

If not when running npm or yarn start you might run into issue.


## Built With

I didn't use these, will add what I used later

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Jasmine Anderson** - [jazz2900](https://github.com/jazz2900)
* **Stephanie Cheribin** - [StephanieCherubin](https://github.com/StephanieCherubin)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks Dan for your patience and believing we can do it!
* Thank you Elliot for helping me us with the database!
* etc

