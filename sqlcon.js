var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/', function (req, res) {

    //create connection
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cruddb',



    });
    //set query
    con.query("SELECT * FROM crudtable", function (err, result) {
        if (err) throw err;
        console.log(result);

    })

})
app.listen(8080, function () {

    console.log('connection success!');
})