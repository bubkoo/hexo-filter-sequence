var reg = /(\s*)(```) *(sequence) *\n?([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

function getId(index) {
  return 'sequence-' + index;
}

exports.render = function (data) {
  if (!ignore(data)) {

    var sequences = [];

    data.content = data.content
      .replace(reg, function (raw, start, startQuote, lang, content, endQuote, end) {
        var seqId = getId(sequences.length);
        sequences.push(content);
        return start + '<div id="' + seqId + '"></div>' + end;
      });

    if (sequences.length) {
      var config = this.config.flowchart;
      // resources
      data.content += '<script src="' + config.webfont + '"></script>';
      data.content += '<script src="' + config.snap + '"></script>';
      data.content += '<script src="' + config.underscore + '"></script>';
      data.content += '<script src="' + config.sequence + '"></script>';
      if (config.css) {
        data.content += '<link href="' + config.css + '" rel="stylesheet" type="text/css" />'
      }
      // exec
      data.content += sequences.map(function (code, index) {
        var seqId = getId(index);
        var codeId = seqId + '-code';
        var optionsId = seqId + '-options';
        return '' +
          '{% raw %}' +
          '<textarea id="' + codeId + '" style="display: none">' + code + '</textarea>' +
          '<textarea id="' + optionsId + '" style="display: none">' + JSON.stringify(config.options) + '</textarea>' +
          '<script>' +
          '  var code = document.getElementById("' + codeId + '").value;' +
          '  var options = JSON.parse(decodeURIComponent(document.getElementById("' + optionsId + '").value));' +
          '  var diagram = Diagram.parse(code);' +
          '  diagram.drawSVG("' + seqId + '", options);' +
          '</script>' +
          '{% endraw %}';
      }).join('');
    }
  }
};
