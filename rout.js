var express = require('express');
var app = express();
var router = express.Router();


app.use('/firstroute', router);

router.get('/', function (req, res) {

    res.send("this is first router");

})
router.get('/rout1', function (req, res) {

    res.send("this is second router");

})

app.listen(8080, function () {

    console.log("Server ok")
})