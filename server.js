var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));

var port = 3000;
if (process.env.NODE_ENV === 'production') {
  port = process.env.PORT;
}
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
