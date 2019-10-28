const jwt = require('jsonwebtoken');

const db = require('../../connection');

module.exports = {
  create: (req, res) => {
    const { user_name, email, password, choice } = req.body;

    const query = `SELECT user.id FROM user WHERE user.email='${email}'`;
    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        res.send('Utilisateur existe');
      }
      else {
        const query1 = `INSERT INTO user (name, email, password, role_id) VALUES ('${user_name}', '${email}', '${password}', ${choice})`;
        db.query(query1, (err, result) => {
          if (err) throw err;
          res.redirect(`/profile/${result.insertId}`);
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
        if (password === result[0].password) {
          const tokenSettings = {
            expiresIn: '1h',
          };
          const token = jwt.sign({ user: result[0].id }, 'cypok', tokenSettings);
          // console.log(token);
          const cookieSettings = {
            httpOnly: true,
            secure: false,
          };
          res.cookie('token', token, cookieSettings).redirect('/profile');
        }
        else {
          res.send('Mauvais mot de passe');
        }
      }
      else {
        res.send('Utilisateur n\'existe pas');
      }
    });
  },

  getProfile: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, 'cypok', (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      }
      else {
        const user_id = decoded.user;
        const query = `SELECT user.id, user.name, user.avatar, role.name as role FROM user JOIN role ON user.role_id = role.id WHERE user.id=${user_id}`;
        // execute query
        db.query(query, (err2, result) => {
          if (err2) throw err2;
          res.send(result);
        });
      }
    });
  },

  editProfile: (req, res) => {
    const { user_name, email, password, avatar } = req.body;
    const query = `UPDATE user SET name='${user_name}', email='${email}', password='${password}', avatar='${avatar}' WHERE id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.redirect(`/profile/${req.params.id}`);
    });
  },

  getPins: (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, 'cypok', (err, decoded) => {
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
    jwt.verify(token, 'cypok', (err, decoded) => {
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
    jwt.verify(token, 'cypok', (err, decoded) => {
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
