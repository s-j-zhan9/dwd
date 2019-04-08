var fs = require('fs');
var createHTML = require('create-html')

var html = createHTML({
    title:'Generated Title',
    body:'<p>Generated Content from Command Line</p>'
})
fs.appendFile('index.html', html, function (err) {
  if (err) console.log(err);
  console.log('webpage created!');

});
