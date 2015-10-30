'use strict';

var expect = require('chai').expect;
var Yadda = require('yadda'),
	English = Yadda.localisation.English,
	dictionary = new Yadda.Dictionary()
		.define('number', /(d+)/),
	yaddaStepLibrary = English.library(dictionary);

// Given BLA I am a registered user "Max"
yaddaStepLibrary.given(/BLA I am a registered user "Max"/, function(done) {
    done();
});

// When BLA I enter my credentials and submit the login form
yaddaStepLibrary.when(/BLA I enter my credentials and submit the login form/, function(done) {
    done();
});

// Then BLA I should see a welcome page
yaddaStepLibrary.then(/BLA I should see a welcome page/, function(done) {
    done();
});

// Given BLA I am a registered user 2
yaddaStepLibrary.given(/BLA I am a registered user 2/, function(done) {
    done();
});

// When BLA I enter my credentials and submit the login form 2
yaddaStepLibrary.when(/BLA I enter my credentials and submit the login form 2/, function(done) {
    done();
});

// Then BLA I should see a welcome page 2
yaddaStepLibrary.then(/BLA I should see a welcome page 2/, function(done) {
    done();
});

module.exports = {
	yaddaStepLibrary: yaddaStepLibrary,
	featureBaseName: 'example.feature'
 };