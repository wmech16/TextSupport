'use strict'

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var Firebase = require('firebase')
var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_AUTH;
var client = require('twilio')(accountSid, authToken);





app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())

var ref = new Firebase('https://billystextsupport.firebaseio.com/numbers')
app.post('/support/messages/', function(req, res){
	var text = {
		body: req.body.message,
	    to: req.body.to,
	    from: "+12013809041"
    } 
}) 
  
var port = 5000
app.listen(port, function() {
    console.log('Server Listening at http://localhost:' + port)
})