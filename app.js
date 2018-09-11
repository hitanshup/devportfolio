const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 70;
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

app.listen(port, function () {
    console.log('devportfolio listening on port ' + port + '.');
});