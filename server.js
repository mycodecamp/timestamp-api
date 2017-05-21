var express = require('express')
var moment = require('moment');

var app = express()

app.get('/:datestring', function (req, res) {
  
  var date=req.params.datestring;
  
  var json = {
    unix: null,
    natural: null
  };
  
  var newdate;
  
  if(/^\d{8,}$/.test(date)) newdate = moment(date, "X");
  else newdate = moment(date, "MMMM D, YYYY");
  
  if(newdate.isValid()) {
    json.unix=newdate.format("X");
    json.natural=newdate.format("MMMM D, YYYY");
  }
  
  res.send(json);
 
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})