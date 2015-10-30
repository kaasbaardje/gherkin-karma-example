'use strict';

var expect = require('chai').expect;
var Yadda = require('yadda'),
	English = Yadda.localisation.English,
	dictionary = new Yadda.Dictionary()
		.define('number', /(d+)/),
	yaddaStepLibrary = English.library(dictionary);

// Given I am a registered user "Max"
yaddaStepLibrary.given(/I am a registered user "Max"/, function(done) {
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

// Given I am a registered user 2
yaddaStepLibrary.given(/I am a registered user 2/, function(done) {
    done();
});

// When I enter my credentials and submit the login form 2
yaddaStepLibrary.when(/I enter my credentials and submit the login form 2/, function(done) {
    done();
});

// Then I should see a welcome page 2
yaddaStepLibrary.then(/I should see a welcome page 2/, function(done) {
    done();
});

module.exports = {
	yaddaStepLibrary: yaddaStepLibrary,
	featureBaseName: 'example0.feature'
 };