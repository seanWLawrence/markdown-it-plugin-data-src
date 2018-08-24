// @flow

/**
 * Adds 'data-src' attribute to all images and removes the 'src' attribute.
 * Built to increase performance by using this with Lozad image lazy-loading
 * @module dataSrc
 * @param {MarkdownIt} md - MarkdownIt instance
 * @returns {undefined} - Side effects only
 * @author Sean W. Lawrence
 * @version 2.0.0
 * @license MIT
 * @exports dataSrc
 */
module.exports = function dataSrc(md: *) {
  /**
   * Remember old renderer, if overriden, or proxy to default renderer.
   * @param {Array<MarkdownItToken>} tokens - elements in Markdown that MarkdownIt will parse into HTML
   * @param {number} idx - Index of the token array
   * @param {Object} options - options passed into MarkdownIt, such as { html: true }, etc.
   * @param {Object} env - environment sandbox
   * @param {*} self - this value for the MarkdowIt class
   * @returns {MarkdownItRenderer} - MarkdownIt renderer instance
   */
  const defaultRender =
    md.renderer.rules.image ||
    function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  /**
   * Sets new rule to replce the 'src' attribute with the 'data-src' attribute
   * when an image token is parsed
   * @param {Array<MarkdownItToken>} tokens - elements in Markdown that MarkdownIt will parse into HTML
   * @param {number} idx - Index of the token array
   * @param {Object} options - options passed into MarkdownIt, such as { html: true }, etc.
   * @param {Object} env - environment sandbox
   * @param {*} self - this value for the MarkdowIt class
   * @returns {undefined}
   */
  md.renderer.rules.image = function(tokens, idx, options, env, self) {
    /**
     * The image token
     * @type {Token}
     */
    const token = tokens[idx];

    /**
     * Index of the src element
     * @type {number}
     */
    var srcIndex = token.attrIndex('src');

    /**
     * Value of src
     * @type {string}
     */
    const srcValue = token.attrGet('src');

    /**
     * Adds 'data-'src' attribute to the the elements token
     * @function
     */
    token.attrPush(['data-src', srcValue]);

    /**
     * Removes the 'src' attribute from the element.
     * This is done so the browser will not try to load the image,
     * and it will instead be loaded with Lozad
     */
    token.attrs.splice(srcIndex, 1);

    /**
     * Pass the updated token to the renderer
     */
    return defaultRender(tokens, idx, options, env, self);
  };
};
