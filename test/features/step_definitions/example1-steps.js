'use strict';

var expect = require('chai').expect;
var Yadda = require('yadda'),
	English = Yadda.localisation.English,
	dictionary = new Yadda.Dictionary()
		.define('number', /(d+)/),
	yaddaStepLibrary = English.library(dictionary);

// Given I am a registered user "Max"
yaddaStepLibrary.given(/I am a registered user "$Max"/, function(input1, done) {
    done();
});

// When I enter my credentials and submit the login form
yaddaStepLibrary.when(/I enter my credentials and submit the login form/, function(done) {
    done();
});

// Then I should see a welcome page
yaddaStepLibrary.then(/I should see a welcome page/, function(done) {
    done();
});

module.exports = {
	yaddaStepLibrary: yaddaStepLibrary,
	featureBaseName: 'example1.feature'
 };