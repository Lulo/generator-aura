define([
  'aura/aura',
  'widgets/<%= _.slugify(name) %>/main'
], function (Aura, widget) {
  'use strict';

  describe('<%= _.slugify(name) %>', function() {
    var app;

    beforeEach(function(done) {
      done();
    });

    it('should exist', function() {
      expect(widget).to.be.ok;
    });

    describe('#initialize', function() {
      it('should have some tests');
    });
  });
});
