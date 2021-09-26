var express = require('express');
var fs = require('fs');
var bodyparser = require('body-parser')



var app = express();
var path = require('path');
app.use(bodyparser());
app.use('/stylefiles', express.static(__dirname + '/css'));
app.get('/', function (req, res) {


    res.sendFile('home.html', { root: __dirname })
    // res.end("My name is " + JSON.stringify(req.query.name));
})
app.post('/user', function (req, res) {


    res.end("My name is " + JSON.stringify(req.body.name) + " " + " &  email is " + JSON.stringify(req.body.email));
})





app.get(/^(.+)/, function (req, res) {


    try {

        if (fs.statSync(path.join(__dirname, 'views', req.params[0] + '.html'))) {
            res.sendFile(req.params[0] + '.html', { root: path.join(__dirname, 'views') });
        }

    }
    catch (error) {

        res.sendFile('404.html', { root: path.join(__dirname, 'views') });
    }



})



app.listen(8080, function () {

    console.log('Server is up');
})