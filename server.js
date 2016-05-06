var express = require('express');
var passport = require('passport');
var DigestStrategy = require('passport-http').DigestStrategy;

var app = express();

passport.use(new DigestStrategy({ qop: 'auth' },
  function(username, done) {
    if (username !== 'alberto') return done(null, false);
    return done(null, { username: 'alberto' }, 'boilerup');
  },
  function(params, done) {
    // validate nonces as necessary
    done(null, true)
  }
));

app.use('/', [ 
  passport.authenticate('digest', { session: false }), 
  express.static(__dirname + '/dist')]
);

var port = 3000;
if (process.env.NODE_ENV === 'production') {
  port = process.env.PORT;
}
app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
