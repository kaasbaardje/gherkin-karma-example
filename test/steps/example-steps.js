var library = require('../features/step_definitions/example.step.js')
   expect = require('chai').expect;

// given An authenticated user
library.given(/An authenticated user/, function(done) {
    done();
});

// when a GET request on /thought is performed
library.when(/a GET request on \/thought is performed/, function(done) {
    done();
});

// then a thought is returned
library.then(/a thought is returned/, function(done) {
    done();
});

module.exports = library;
