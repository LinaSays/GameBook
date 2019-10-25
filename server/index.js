// Import
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

// Server
const app = express();

app.use(session({
  name: 'session',
  secret: 'cypok',
  keys: 0,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 },
}));

// app.use(session({
//   secret: 'cypok',
//   name: 'sessionId',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 },
// }));

// app.use(cookieSession({
//   name: 'session',
//   keys: [/ secret keys /],

//   // Cookie Options
//   maxAge: 24  60  60 * 1000 // 24 hours
// }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Start on :3000
app.listen(3000);

// importing route
const routes = require('./app/routes');

routes(app);
