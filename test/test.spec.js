module.exports = (function() {
    'use strict';

    var $ = require('jquery'),
        Yadda = require('yadda'),
        yaddaStepLibs = require('./features/step_definitions/*steps.js', {
            mode: 'list'
        }),
        FeatureParser = Yadda.parsers.FeatureParser,
        English = Yadda.localisation.English,
        featureParser = new FeatureParser(English),
        featurePath,
        featureFile,
        feature,
        stepLib;

    /*each step is executed within it's own mocha 'it' function*/
    Yadda.plugins.mocha.StepLevelPlugin.init();

    yaddaStepLibs.map(function(lib) {
        stepLib = lib.module.yaddaStepLibrary;
        featurePath = lib.module.featureBaseName;
        featurePath = "base/test/features/" + featurePath;
        featureFile = $.ajax({
            url: featurePath,
            async: false
        }).responseText;

        runYaddaStepLibrary(featureFile, stepLib);
    });

    function runYaddaStepLibrary(featureFile, yaddaStepLibrary) {
        var yaddaInterpreter = Yadda.createInstance(yaddaStepLibrary);
        feature = featureParser.parse(featureFile);

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yaddaInterpreter.run(step, {}, done);
            });
        });
    }
}());
