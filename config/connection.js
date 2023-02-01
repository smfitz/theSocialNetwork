const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/theSocialNetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
