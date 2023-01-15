const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOODB_URI ||
    'mongodb://127.0.0.1:27017/shelterDB')

module.exports = mongoose.connection