define([
  'lodash',
  'text!./template.html'
], function (_, tpl) {
  'use strict';

  /**
   * Compile template
   */
  var template = _.template(tpl);

  /**
   * Initialize widget
   */
  function initialize() {
    _.bindAll(this);
    this.render();
  }

  /**
   * Render template
   */
  function render() {
    this.html(template());
  }

  /**
   * Expose public api
   */
  return {
    initialize: initialize,
    render: render
  };
});
