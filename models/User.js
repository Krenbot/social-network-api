const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email!']
    },
    thoughts: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    }]

}, {
    //Does not display id
    timestamps: true,
    // id: false
})

UserSchema.virtual('friendCount')
    // Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
    .get(function () {
        return this.friends.length
    })

const User = mongoose.model('User', UserSchema)
module.exports = User