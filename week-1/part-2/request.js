const request = require('request');
var url = process.argv.slice(2, 3);
//console.log(url)

  var line = data.split()

request(url[0], function(error, response, body) {
  console.log(body);
})
