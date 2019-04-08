
var fileSys = require('fs');
var createHTML = require('create-html')
var filename = "source.txt";
var lines;
var content = "";


fileSys.readFile(filename,function (err, data) {
    if (err) console.log(err);
    var textArray = data.toString().split("\n");
    for(var i = 0; i < textArray.length; i++){
        content += "<h2>";
        content += textArray[i];
        content += "</h2>";
    }
    var htmlContent = createHTML({
        title:'Bio',

        body: content
    })
    fileSys.appendFile('index2.html', htmlContent, function (err) {
        if (err) console.log(err);
        console.log('generate file from text');
      });
  });
