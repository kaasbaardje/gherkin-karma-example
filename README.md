## 1. Introduction

This package is an example of an workflow for automated [unit testing](https://en.wikipedia.org/wiki/Unit_testing) in JavaScript. It's goal is to support developers in improving the quality of their software.

## 2. Motive

### Recurring problems:
Sometimes programmers are faced with one ore more of the following points:
* Lack in motivation and time for:
    * documentation
    * unit tests
* Costumer requirements are:
    * alternating fast
    * unclarified
    * being misunderstood

### Solution:
Get everything together in one automated workflow by combining the styles of [TDD](https://en.wikipedia.org/wiki/Test-driven_development) and [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development).

It all starts with writing software requirements in a simple language restricted to just some keywords. Besides functioning as a fundament for documentation, they can be used as a source for automatic generated unit tests. This way the written requirements can be understood by everybody, one could even write them together with costumers or none developer co-workers. Furthermore a generated test not only saves time, it guarantees that the specified statements of the unit tests are based strictly on your requirements. As a result you minimize the risk of misconceptions. If there's a change of requirements the portrayed process chain can even be used to update the generated unit tests immediately. Since only one source is used as a fundament it's easy to keep everything consistently.

Implemented with a composition of modern frameworks this package tries to be a useful approach of the portrayed procedure.

## 3. Install
```
npm install gherkin-karma-example
```

## 4. Execute
```
npm test
```

## 5. Composition
Most important packages were:

 * [Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)
 * [karma](https://www.npmjs.com/package/karma)
 * [yadda](https://www.npmjs.com/package/yadda)
 * [mocha](https://www.npmjs.com/package/mocha)
 * [chai](https://www.npmjs.com/package/chai)
 * [sinon](https://www.npmjs.com/package/sinon)

![infographic](https://raw.githubusercontent.com/kaasbaardje/gherkin-karma-example/master/infographic.png)

## 6. Todo
* Handling of gherkin feature context
* Integration of webdriver
* Yeoman Integration
* Include German words for Gherkin
* ES6 Support
* Include karma module code coverage

## Maintainer  

[kaasbaardje](https://github.com/kaasbaardje)

## License

[MIT](https://opensource.org/licenses/MIT)
