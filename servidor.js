var express = require('express');

var app = express();
app.use('/static', express.static('public'));
console.log('osa');
app.get('/somos', function(req, res){
  console.log(req.query.a);
  res.sendFile(__dirname + '/public/somos.html');

  
});

app.listen(3000);
