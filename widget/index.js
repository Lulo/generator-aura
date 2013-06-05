'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

module.exports = WidgetGenerator;

function WidgetGenerator() {
  yeoman.generators.Base.apply(this, arguments);
  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
  this.argument('name', { type: String, required: true });
}

util.inherits(WidgetGenerator, yeoman.generators.Base);

WidgetGenerator.prototype.creatWidgetFiles = function creatWidgetFiles() {
  this.template('widgets/main.js', 'app/widgets/' + this.name + '/main.js');
  this.template('widgets/template.html', 'app/widgets/' + this.name + '/template.html');
  this.template('widgets/style.less', 'app/widgets/' + this.name + '/style.less');
  this.template('widgets/spec.js', 'app/widgets/' + this.name + '/spec/main.spec.js');
};