const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10; // for hash password
const secret = 'cypok'; // for token

const db = require('../../connection');

module.exports = {
  create: (req, res) => {
    const avatar = 'https://i.imgur.com/rMxbnBM.png';
    const { user_name, email, password, choice } = req.body;

    const query = `SELECT user.id FROM user WHERE user.email='${email}'`;
    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send('Utilisateur existe');
      }
      else {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          const query1 = `INSERT INTO user (name, email, password, avatar, role_id) VALUES ('${user_name}', '${email}', '${hash}', '${avatar}', '${choice}')`;
          db.query(query1, (err2, result2) => {
            if (err2) throw err;
            const tokenSettings = {
              expiresIn: '5d',
            };
            const token = jwt.sign({ user: result2.insertId }, secret, tokenSettings);
            // console.log(token);
            const cookieSettings = {
              httpOnly: false,
              secure: false,
            };
            res.cookie('token', token, cookieSettings).redirect('/profile');
          });
        });
      }
    });
  },

  connect: (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    // console.log(req.session);
    const query = `SELECT user.id, user.password FROM user WHERE user.email='${email}'`;
    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err2, res2) => {
          if (res2) {
            const tokenSettings = {
              expiresIn: '5d',
            };
            const token = jwt.sign({ user: result[0].id }, secret, tokenSettings);
            // console.log(token);
            const cookieSettings = {
              httpOnly: false,
              secure: false,
            };
            res.cookie('token', token, cookieSettings).redirect('/profile');
          }
          else {
            res.send('Mauvais mot de passe');
          }
        });
      }
      else {
        res.send('Utilisateur n\'existe pas');
      }
    });
  },

  getProfile: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const user_id = decoded.user;
        const query = `SELECT user.id, user.name, user.email, user.avatar, user.password, role.name as role FROM user JOIN role ON user.role_id = role.id WHERE user.id=${user_id}`;
        // execute query
        db.query(query, (err2, result) => {
          if (err2) throw err2;
          res.send(result);
        });
      }
    });
  },

  editProfile: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const { user_name, email, password, avatar } = req.body;
        const user_id = decoded.user;
        const query = `UPDATE user SET name='${user_name}', email='${email}', password='${password}', avatar='${avatar}' WHERE id=${user_id}`;
        // execute query
        db.query(query, (err, result) => {
          if (err) throw err;
          res.redirect('/profile');
        });
      }
    });
  },

  getPins: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const user_id = decoded.user;
        const query = `SELECT user.id, user.name, pins.name AS badge, pins.image FROM user JOIN user_has_pins ON user_has_pins.user_id = user.id JOIN pins ON user_has_pins.pins_id = pins.id WHERE user.id=${user_id}`;
        // execute query
        db.query(query, (err1, result) => {
          if (err1) throw err1;
          res.send(result);
        });
      }
    });
  },

  getReadStories: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const user_id = decoded.user;
        const query = `SELECT S.* FROM user U LEFT JOIN user_read_story R ON R.user_id = U.id LEFT JOIN story S ON R.story_id = S.id WHERE U.id=${user_id}`;
        // execute query
        db.query(query, (err1, result) => {
          if (err1) throw err1;
          res.send(result);
        });
      }
    });
  },

  getWroteStories: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const user_id = decoded.user;
        const query = `SELECT story.id, story.title, story.image FROM story JOIN user ON story.author_id = user.id WHERE user.id=${user_id}`;
        // execute query
        db.query(query, (err1, result) => {
          if (err1) throw err1;
          res.send(result);
        });
      }
    });
  },
};
