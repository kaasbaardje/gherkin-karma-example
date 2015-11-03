module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'browserify'],

        files: [
            'test/test.spec.js',
            {
                pattern: 'test/features/*.feature',
                included: false
            }
        ],

        exclude: [],

        browserify: {
            transform: ['require-globify']
        },

        preprocessors: {
            'test/test.spec.js': 'browserify'
            ,'test/features/*.feature': 'gherkin_yadda'
        },

        gherkin_yaddaPreprocessor: {
            displayOutputPath: true,
            useChai : true,
            useDefine: true,
            generateFeatureBaseName: true
        },

        reporters: ['mocha' /*, 'html'*/ ],
        port: 9999,
        colors: true,
        // logLevel: config.LOG_DISABLE,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true,

        plugins: [
            'karma-chai',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-chrome-launcher',
            'karma-browserify',
            'karma-sinon',
            /*'karma-html-reporter,'*/
            'karma-mocha-reporter',
            'karma-gherkin_yadda-preprocessor'
        ],

        // browsers: ['Chrome']
        // browsers: ['Firefox']
        browsers: ['PhantomJS']
    });
};
