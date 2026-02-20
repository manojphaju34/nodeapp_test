var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From rentalbox" }');
});

app.get('/wells', function (req, res) {
    res.send('{ "response": "Hello from Sterling Wells" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
