# markdown-it-plugin-data-src

Tiny plugin that replaces `src` attributes on Markdown images with `data-src` for use with [Lozad.js](https://github.com/ApoorvSaxena/lozad.js) to lazy load all images by default.

## The problem

Images slow down your website. Why not lazy load all of them by default?

## This solution

This plugin will automatically get your images ready for Lozad to lazy load them all by default.

> Note: if you need to support users without JavaScript, you can simply add a `<noscript>` element underneath your image with a standard `<img>` element with a `src` attribute.  

## What this plugin is not

A lazy-loading library. This library will prep your images for use with Lozad.js. You'll need to install Lozad.js for your images to load with this plugin.

## Installation

`npm install markdown-it-plugin-data-src`

## Usage

### CommonJS plugin example

```javascript
const md = require('markdown-it')()
  .use(require('markdown-it-plugin-data-src'))
```

### ES6 Module plugin example

```javascript
import MarkdownIt from 'markdown-it'
import dataSrc from 'markdown-it-plugin-data-src'

const md = new MarkdownIt()
  .use(dataSrc)
```

Then simply [install Lozad.js](https://github.com/ApoorvSaxena/lozad.js) as you normally would and run it on all images.

### Inline HTML Lozad example

```html
<script src="https://cdn.jsdelivr.net/npm/lozad">
  // Lozad lazy image loading source
</script>
<script>
  // Get all image tags and run Lozad lazy loading on them
  var images = document.querySelectorAll('img')
  var observer = lozad(images);

  observer.observe();
</script>
```

### ES6 Module Lozad example

```javascript
import lozad from 'lozad'

// Get all image tags and run Lozad lazy loading on them
const images = document.querySelectorAll('img')
const observer = lozad(images);

observer.observe();
```

## License

MIT

Copyright 2018 Sean W. Lawrence - [visit my portfolio](https://swl.netlify.com).