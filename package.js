Package.describe({
  name: 'planettraining:ng-color-picker-no-html',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'ng-color-picker package without the html',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/planet-training/meteor-ng-color-picker-no-html.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('angular:angular@1.4.8', ['client']);
  api.addFiles(['ng-color-picker/color-picker.css','ng-color-picker/color-picker.js'],'client');
});
