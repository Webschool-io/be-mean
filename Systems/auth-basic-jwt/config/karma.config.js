// Karma configuration
// Generated on Mon Sep 07 2015 14:20:30 GMT-0300 (BRT)
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      "../public/libs/angular/angular.js",
      "../public/libs/angular-resource/angular-resource.js",
      "../public/libs/angular-route/angular-route.js",
      "../public/libs/angular-bootstrap/ui-bootstrap.js",
      "../public/libs/ngstorage/ngStorage.js",
      "../public/libs/angular-mocks/angular-mocks.js",
      "../public/src/modules/*.js",
      "../public/src/services/*.js",
      "../public/src/controllers/*.js",
      "../public/src/routes/*.js",
      "../test/spec/**/*Spec.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
