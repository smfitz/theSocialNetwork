const { Users } = require('../models');

module.exports = {
  getAllUsers(req, res) {
    Users.find()
      .then(dbUserData => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));

  }
}