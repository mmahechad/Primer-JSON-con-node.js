var express = require('express');
var app = express();

app.get('/about', function(req, res) {
    res.send('Hello haleluya!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
app.get('localhost:3000/about', function(req, res) {
    res.send('about');
});
app.route('/book')
    .get(function(req, res) {
        res.jsonp({ user: 'tobi' });
    })
    .post(function(req, res) {
        res.send('Add a book');
    })
    .put(function(req, res) {
        res.send('Update the book');
    });