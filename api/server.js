/* ----------------- Author: Guilherme Sanches Pereira  ---------- */

var express = require('express');
var index = require('./routes/index');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var connection = require('express-myconnection');
var mysql = require('mysql');
var path = require("path");


app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    connection(mysql,{
        host: '127.0.0.1',
        user: 'guilhermesanches',
        password : '',        
        database:'c9'
    },'request')
);

app.get('/', function(req,res){
        res.redirect('index.html');
    
});
app.use('/', index);
app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Chat server listening at localhost");
});

module.exports = app;
