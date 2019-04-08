const request = require('request');
var url=process.argv.slice(2,3);
//console.log(url)

request(url[0],function(error, response, body){
    console.log(body);
})
