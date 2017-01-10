# hexo-filter-sequence

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-filter-sequence/blob/master/LICENSE)

[![npm:](https://img.shields.io/npm/v/hexo-filter-sequence.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-filter-sequence)
[![Package Quality](http://npm.packagequality.com/shield/hexo-filter-sequence.svg)](http://packagequality.com/#?package=hexo-filter-sequence)

> Generate UML sequence diagrams for Hexo.

## Install

```
npm install --save hexo-filter-sequence
```

## Usage

This plugin is based on [js-sequence-diagrams](https://github.com/bramp/js-sequence-diagrams), so you can defined the chart as follow:  

    ```sequence
    Alice->Bob: Hello Bob, how are you?
    Note right of Bob: Bob thinks
    Bob-->Alice: I am good thanks!
    ```

## Config
   
In your site's `_config.yml`:

```yaml
sequence:
  webfont:
  snap:        
  underscore:
  sequence:
  css: # the url for css, such as hand drawn theme 
  options: 
    theme: 
    css_class: 
```
   
Your config will be merged into default config:

```json
{
  "webfont": "https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.27/webfontloader.js",
  "snap": "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js",
  "underscore": "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js",
  "sequence": "https://cdnjs.cloudflare.com/ajax/libs/js-sequence-diagrams/1.0.6/sequence-diagram-min.js",
  "style": "",
  "options": {
    "theme": "simple",
    "css_class": ""
  }
}
```   

## Related

- [hexo-toc](https://github.com/bubkoo/hexo-toc) Insert a markdown TOC before posts be rendered.
- [hexo-filter-fenced-code](https://github.com/bubkoo/hexo-filter-fenced-code) Extend syntax for the native fenced code block.
- [hexo-filter-flowchart](https://github.com/bubkoo/hexo-filter-flowchart) Generate flowchart diagrams for Hexo.
- [hexo-filter-sub](https://github.com/bubkoo/hexo-filter-sub) Generate subscript (`<sub>`) tag for Hexo.
- [hexo-filter-sup](https://github.com/bubkoo/hexo-filter-sup) Generate superscript (`<sup>`) tag for Hexo.
- [hexo-theme-formula](https://github.com/bubkoo/hexo-theme-formula) Hexo theme base on jade and less. 

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-filter-sequence/issues/new).
