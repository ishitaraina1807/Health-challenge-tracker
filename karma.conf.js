module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-coverage'),
        require('karma-jasmine-html-reporter'),
        require('@angular-devkit/build-angular/plugins/karma')
      ],
      files: [
        { pattern: 'src/test.ts', watched: false }
      ],
      exclude: [],
      preprocessors: {
        'src/**/*.ts': ['coverage']
      },
      coverageReporter: {
        dir: require('path').join(__dirname, 'coverage/my-angular-app'),
        subdir: '.',
        reporters: [
          { type: 'html', subdir: 'report-html' },
          { type: 'text-summary' }
        ]
      },
      reporters: ['progress', 'coverage', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  