module.exports = (function() {
    'use strict';

    var fs = require('fs'),
        path = require('path'),
        $ = require('jquery'),
        Yadda = require('yadda'),
        yaddaStepLibs = require('./features/step_definitions/*steps.js', {mode: 'list'}),
        featurePath = "",
        stepLib = "";

    yaddaStepLibs.map(function(lib) {
        featurePath = lib.module.featureBaseName;
        featurePath = "base/test/features/" + featurePath;
        stepLib = lib.module.yaddaStepLibrary;

        runYaddaStepLibrary(featurePath, stepLib);
    });

    function runYaddaStepLibrary(featurePath, yaddaStepLibrary) {
        var yaddaInterpreter = Yadda.createInstance(yaddaStepLibrary),

            FeatureParser = Yadda.parsers.FeatureParser,
            English = Yadda.localisation.English,
            parser = new FeatureParser(English),

            loadedFeature = $.ajax({
                url: featurePath,
                async: false
            }).responseText,
            feature = parser.parse(loadedFeature);

        if (true) { /*steps are reported*/
            /*each step is executed within it's own mocha 'it' function*/
            Yadda.plugins.mocha.StepLevelPlugin.init();
            scenarios(feature.scenarios, function(scenario) {
                steps(scenario.steps, function(step, done) {
                    yaddaInterpreter.run(step, done);
                });
            });
        } else { /*ony scenarios are reported*/
            /*runs all of the steps for a given scenario within the same mocha 'it' function*/
            Yadda.plugins.mocha.ScenarioLevelPlugin.init();
            scenarios(feature.scenarios, function(scenario, done) {
                yaddaInterpreter.run(scenario.steps, done);
            });
        }
    }
}());
