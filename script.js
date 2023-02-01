const mongoose = require('mongoose');
const User = require("./models/Users")

mongoose.connect("mongodb://localhost/theSocialNetwork")

function run () {
    const user = User.create({
        username: "s3anf1tz",
        email: "sean@me.test",
        thoughts: ["I am so sleepy", "I hope this is working"],
        friends: "",
    })
}
