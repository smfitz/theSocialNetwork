const { Users } = require('../models');

module.exports = {

  // get all users
  getAllUsers(req, res) {
    Users.find()
      .then(dbUserData => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));

  }
}



