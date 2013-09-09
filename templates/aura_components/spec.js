define([
  'aura/aura',
  'component/<%= _.slugify(name) %>/main'
], function (Aura, component) {
  'use strict';

  describe('<%= _.slugify(name) %>', function() {
    var app;

    beforeEach(function(done) {
      done();
    });

    it('should exist', function() {
      expect(component).to.be.ok;
    });

    describe('#initialize', function() {
      it('should have some tests');
    });
  });
});
