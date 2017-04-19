var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('token world');
});

app.get('/helloworld', function (req, res) {
    var options = {
      method: 'POST',
      url: 'https://codehackdays.eu.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: {
        "client_id":process.env.CLIENT_ID,
        "client_secret":process.env.CLIENT_SECRET,
        "audience":"https://codehackdays-helloworld.herokuapp.com/",
        "grant_type":"client_credentials"
      }
    };

    request(options, function (err, response, body) {
      if (err) { throw err };

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
  });
});

app.listen(process.env.PORT || 3000);
