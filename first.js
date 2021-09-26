var mod = require('./module');
var http = require('http');
http.createServer(function (req, res) {

    res.end("Hello  world");


}).listen(8080);
console.log(mod);
mod.func1();
mod.func2();
console.log(mod.val);
