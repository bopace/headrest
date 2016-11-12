var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

app.use(stormpath.init(app, {
    web: {
        produces: ['application/json']
    }
}));

app.on('stormpath.ready', function() {
    app.listen(3000, 'localhost', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('listening at http://localhost:3000');
    });
});