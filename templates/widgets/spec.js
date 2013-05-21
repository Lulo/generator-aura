define([
  'aura/aura',
  'widgets/<%= _.slugify(name) %>/main'
], function (Aura, extension) {
  'use strict';

  var app;

  beforeEach(function(done) {
    //generator needs some work
  });

  describe('<%= _.slugify(name) %>', function() {
    describe('#initialize', function() {
      it('should have some tests');
    });
  });
});
