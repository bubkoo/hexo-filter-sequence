var assign = require('deep-assign');
var renderer = require('./lib/renderer');

hexo.config.flowchart = assign({
  webfont: 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.27/webfontloader.js',
  snap: 'https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.4.1/snap.svg-min.js',
  underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js',
  sequence: 'https://cdnjs.cloudflare.com/ajax/libs/js-sequence-diagrams/1.0.6/sequence-diagram-min.js',
  style: '',
  options: {
    theme: 'simple'
  }
}, hexo.config.flowchart);

hexo.extend.filter.register('before_post_render', renderer.before, 9);
hexo.extend.filter.register('after_post_render', renderer.after);

