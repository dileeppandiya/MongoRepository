var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':27017';
var db;

MongoClient.connect(url, function (err, database) {
    console.log("Connected correctly to server");
    db = database;
});

app.get('/', function (req, res) {
  res.send('Hello world\n');
});


app.listen(8080);