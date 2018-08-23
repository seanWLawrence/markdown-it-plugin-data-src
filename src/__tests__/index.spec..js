import MarkdownIt from 'markdown-it';
import dataSrc from '../index';

describe('Plugin', () => {
  /**
   * Markdown image string to test
   * @type {string} - Markdown image string
   * @const
   */
  const markdownImage = '![test](image.html)';

  /**
   * Creates new MarkdownIt instance
   * @type {MarkdownIt}
   */
  const md = new MarkdownIt();

  /**
   * Loads plugin in MarkdownIt instance
   */
  md.use(dataSrc);

  /**
   * The outputted HTML string
   * @const
   * @type {string} - HTML output string
   */
  const result = md.render(markdownImage).trim();

  /**
   * Expected HTML string
   * @const
   * @type {string} - Expected HTML string
   */
  const expected = '<p><img alt="test" data-src="image.html"></p>';

  test('Removes the \'src\' sttribute', () => {
    /**
     * Test that 'src' is not in the string
     */
    expect(result).not.toMatch(/\ssrc="image.html"/);
  });

  test('Displays the \'data-src\' attribute', () => {
    /**
     * Test that 'data-src' is in the string
     */
    expect(result).toMatch(/data-src="image.html"/);
  });

  test('Renders the HTML string as expected', () => {
    /**
     * Tests that the entire string matches as expected,
     * with 'alt' and 'data-src' attributes, and
     * the wrapping <p> tags
     */
    expect(result).toEqual(expected);
  });
});
