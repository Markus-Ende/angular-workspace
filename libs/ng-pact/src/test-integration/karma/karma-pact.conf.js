// Karma configuration file for PACT

const pactServices = [
  {
    cors: true,
    port: 10001,
    consumer: 'ng-pact-lib',
    provider: 'my-test-service',
    dir: 'pacts',
    spec: 2
  }
];

module.exports = function(config) {
  config.set({
    pact: pactServices,
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'pact'],
    plugins: [
      require('karma-jasmine'),
      require('@pact-foundation/karma-pact'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      args: [pactServices],
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
