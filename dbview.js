var express = require('express');
var app = express();
var mysql = require('mysql');
var handlebars = require('express-handlebars');
var con;



//define libraries

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.get('/', function (req, res) {

    con.query("SELECT * FROM crudtable", function (err, result) {

        if (err) throw err;

        console.log(result);
        //show table
        res.render('crudtable', {
            result: result
        })
    })

})


app.listen(8080, function () {

    con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'cruddb',
    })

    console.log("server is on");


})