'use strict';

var expect = require('chai').expect;
var Yadda = require('yadda'),
	English = Yadda.localisation.English,
	dictionary = new Yadda.Dictionary()
		.define('number', /(d+)/),
	steps = English.library(dictionary);

// Given I am a registered user
steps.given(/I am a registered user/, function(done) {
    // done();
});

// When I enter my credentials and submit the login form
steps.when(/I enter my credentials and submit the login form/, function(done) {
    done();
});

// Then I should see a welcome page
steps.then(/I should see a welcome page/, function(done) {
    done();
});

module.exports = steps;
