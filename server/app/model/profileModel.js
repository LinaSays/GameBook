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
    console.log(email, password);
    console.log(req.session);
    const query = `SELECT user.id, user.password FROM user WHERE user.email='${email}'`;
    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        if (password === result[0].password) {
          req.session.email = req.body.email;
          res.redirect(`/profile/${result[0].id}`);
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
    const query = `SELECT user.id, user.name, user.avatar, role.name as role FROM user JOIN role ON user.role_id = role.id WHERE user.id=${req.params.id}`;

    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
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
    const query = 'SELECT user.id, user.name, pins.name AS badge, pins.image FROM user JOIN user_has_pins ON user_has_pins.user_id = user.id JOIN pins ON user_has_pins.pins_id = pins.id';
    // execute query
    db.query(query, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  },
};
