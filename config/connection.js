const mongoose = require('mongoose');

mongoose.connect('mongodb://', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;