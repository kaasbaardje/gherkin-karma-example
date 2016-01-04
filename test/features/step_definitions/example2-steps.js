'use strict';



var expect = require('chai').expect;
var Yadda = require('yadda'),
	English = Yadda.localisation.English,
	dictionary = new Yadda.Dictionary()
		.define('number', /(d+)/),
	yaddaStepLibrary = English.library(dictionary);

// Given I am a registered user "Max"
yaddaStepLibrary.given(/I am a registered user "$Max"/, function(input1, done) {

});

module.exports = {
	yaddaStepLibrary: yaddaStepLibrary,
	featureBaseName: 'example2.feature'
};