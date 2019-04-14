var express = require('express');
var mustacheExpress = require('mustache-express');
const request = require('request');
var fs = require('fs');
var createHTML = require('create-html')
var html
var app = express()

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res) {
  res.render('foo', {
    template_variable_name: req.query.form_input_url
  });
})
app.get('/result', function(req,res){
    var url = req.query.url;
    //this works
    // res.redirect("http://" + url);

    //this doesn't
    request(url, function(error, response, body) {
      console.log(body);
      html = createHTML({
        title: 'Requested Site',
        body: body})
      })
      res.write(html);
})


app.listen(8000, function() {
  console.log('Our first web server! Started on port 8000')
})
