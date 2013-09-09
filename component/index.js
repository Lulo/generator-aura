'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = ComponentGenerator;

function ComponentGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('name', { type: String, required: true });
}

util.inherits(ComponentGenerator, yeoman.generators.Base);

ComponentGenerator.prototype.createAuraComponentFiles = function createAuraComponentFiles() {
  this.template('aura_components/main.js', 'app/aura_components/' + this.name + '/main.js');
  this.template('aura_components/template.html', 'app/aura_components/' + this.name + '/template.html');
  this.template('aura_components/style.less', 'app/aura_components/' + this.name + '/style.less');
  this.template('aura_components/spec.js', 'app/aura_components/' + this.name + '/spec/main.spec.js');
};
