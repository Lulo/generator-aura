define([
  'aura/aura',
  'extensions/<%= _.slugify(name) %>/main'
], function (Aura, extension) {
  'use strict';

  describe('<%= _.slugify(name) %>', function() {

    var app;

    beforeEach(function(done) {
      app = new Aura({debug: true});
      app.use(extension);

      app.start().done(function() {
        done();
      });
    });

    describe('#initialize', function() {
      it('should have some tests');
    });
  });
});
