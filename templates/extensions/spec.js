
define([
  'aura/aura',
  'extensions/<%= _.slugify(name) %>/main'
], function (Aura, extension) {
  'use strict';

  var app;


  beforeEach(function(done) {
    app = new Aura({debug: true});

    app.use(extension);

    // reference your extension below
    app.start().done(function() {
      // do stuff here
      setTimeout(done, 0);
    });
  });

  describe('<%= _.slugify(name) %>', function() {
    describe('#initialize');
  });
});
