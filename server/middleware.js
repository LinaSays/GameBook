const jwt = require('jsonwebtoken');

const secret = 'cypok';

const withAuth = (req, res, next) => {
  // console.log(req.cookies.token);
  const { token } = req.cookies;

  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  }
  else {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = withAuth;
