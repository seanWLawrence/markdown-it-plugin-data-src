"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Adds 'data-src' attribute to all images and removes the 'src' attribute.
 * Built to increase performance by using this with Lozad image lazy-loading
 * @module dataSrc
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Sean W. Lawrence
 * @license MIT
 */
function dataSrc(md) {
  var defaultRender = md.renderer.rules.image || function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var srcIndex = token.attrIndex('src');
    var srcValue = token.attrGet('src');
    token.attrPush(['data-src', srcValue]);
    token.attrs.splice(srcIndex, 1);
    return defaultRender(tokens, idx, options, env, self);
  };
}

var _default = dataSrc;
exports.default = _default;