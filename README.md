<div align="center">
<h1>markdown-it-plugin-data-src</h1>

<p>Tiny plugin that replaces <code>src</code> attributes on Markdown images with <code>data-src</code> for use with <a href="https://github.com/ApoorvSaxena/lozad.js" title="Lozad.js library">Lozad.js</a> to lazy load all images by default.</p>
</div>

[![npm](https://img.shields.io/npm/v/markdown-it-plugin-data-src.svg?style=flat-square&colorB=blue)](https://www.npmjs.com/package/markdown-it-plugin-data-src)
[![Travis (.org)](https://img.shields.io/travis/seanWLawrence/markdown-it-plugin-data-src.svg?style=flat-square)](https://travis-ci.org/seanWLawrence/markdown-it-plugin-data-src)
[![Coveralls github branch](https://img.shields.io/coveralls/github/seanWLawrence/markdown-it-plugin-data-src/master.svg?style=flat-square&colorB=brightgreen)](https://coveralls.io/github/seanWLawrence/markdown-it-plugin-data-src)
[![GitHub last commit](https://img.shields.io/github/last-commit/seanwlawrence/markdown-it-plugin-data-src.svg?style=flat-square)](https://github.com/seanwlawrence/markdown-it-plugin-data-src/commits/master)
![GitHub issues](https://img.shields.io/github/issues-raw/seanwlawrence/markdown-it-plugin-data-src.svg?style=flat-square)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/markdown-it-plugin-data-src.svg?style=flat-square)
[![GitHub](https://img.shields.io/github/license/seanwlawrence/markdown-it-plugin-data-src.svg?style=flat-square)](https://github.com/seanWLawrence/markdown-it-plugin-data-src/blob/master/LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-blue.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## The problem

Images slow down your website. Why not lazy load all of them by default?

## This solution

This plugin will automatically get your images ready for Lozad to lazy load them all by default.

> Note: if you need to support users without JavaScript, you can simply add a `<noscript>` element underneath your image with a standard `<img>` element with a `src` attribute.  

## What this plugin is not

A lazy-loading library. This library will prep your images for use with Lozad.js. You'll need to install Lozad.js for your images to load with this plugin.

## Table of Contents

- [The problem](#the-problem)
- [This solution](#this-solution)
- [What this plugin is not](#what-this-plugin-is-not)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [CommonJS plugin example](#commonjs-plugin-example)
  - [ES6 Module plugin example](#es6-module-plugin-example)
  - [Inline HTML Lozad example](#inline-html-lozad-example)
  - [ES6 Module Lozad example](#es6-module-lozad-example)
- [License](#license)

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

Copyright 2018 Sean W. Lawrence - [visit my portfolio](https://swl.netlify.com)