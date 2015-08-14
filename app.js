var express = require('express');
var manifesto = require('manifesto');
var app = express();

app.get('/', function (req, res) {

    manifesto.loadManifest('http://wellcomelibrary.org/iiif/b18035723/manifest').then(function(manifest) {
        manifest = manifesto.create(manifest);
        res.send(manifest.getLabel());
    });

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});