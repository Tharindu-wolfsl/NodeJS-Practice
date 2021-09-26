var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var sessions = require('express-session');
var session;


app.use(sessions({
    secret: 'ffkg123'
}))
app.use(bodyparser());

//use login html form
app.get('/', function (req, res) {
    //check user already login or not using session
    session = req.session;
    if (session.userid) {

        res.send("Login succces! <a href=\'/logout'>Clict to logout</a>");
    }
    else
        res.sendFile('login.html', { root: __dirname });
})
//destroy login
app.get('/logout', function (req, res) {

    req.session.destroy();
    res.redirect('/');
})

//login process
app.post('/login', function (req, res) {

    if (req.body.username == 'admin' && req.body.passwd == 'admin') {
        //create session
        session = req.session;
        session.userid = req.body.username;

        res.send("Login succces! <a href=\'/logout'>Clict to logout</a>");
    }

    else {
        res.send("Login Fail");
    }
})

app.listen(8080, function () {

    console.log("Server on");
})