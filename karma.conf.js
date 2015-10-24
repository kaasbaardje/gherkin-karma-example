module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'browserify'],

        files: [
            'test/features/step_definitions/*-steps.js',
            'test/test.spec.js',
            {pattern: 'test/features/*.feature', included: false}
        ],

        exclude: [],

        browserify: {},

        preprocessors: {
            'test/test.spec.js': 'browserify',
            'test/features/step_definitions/*-steps.js': 'browserify'
        },

        reporters: ['mocha'/*, 'html'*/],
        port: 9999,
        colors: true,
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
            /*'karma-html-reporter'*/
            'karma-mocha-reporter',
        ],

        // browsers: ['Chrome']
        // browsers: ['Firefox']
        browsers: ['PhantomJS']
    });
};
