Package.describe({
  name: 'repro-package',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.addFiles('Vote.jsx', ['client', 'server']);
  api.mainModule('repro-package.js');
});

Package.onTest(function(api) {
  api.use('repro-package');
  api.use('ecmascript');
  api.use('practicalmeteor:mocha@2.4.5_2');
  api.addFiles('repro-package.tests.js', 'client');
});

// Npm.depends({
//   react: '15.0.1'
// });
