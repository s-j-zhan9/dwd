
var express = require('express');
var mustacheExpress = require('mustache-express');
var app = express()
var insults = ["bad","shithead","stupid"];


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
    res.render('foo', {
      bandName: req.query.form_input_band
    });
  });

app.get('/result', function(req, res){
    var bandName = req.query.band
    console.log(req.query.band)
    var x = Math.floor(Math.random() * 3);
    res.send(bandName + " is " + insults[x]);
})


app.listen(8000, function () {
  console.log('Our first web server! Started on port 8000')
})
