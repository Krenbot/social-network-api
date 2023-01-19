//BONUS: Remove a user's associated thoughts when deleted.
const { User } = require('../models')

module.exports = {
    //GET all users
    findUsers: async function (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //GET a single user by _id and populated thought and friend data
    findOneUser: async function (req, res) {
        try {
            const user = await User
                .findOne({ _id: req.params.id })
                .populate('thought')
                .populate('friend')
            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //POST a new user
    createUser: async function (req, res) {
        try {
            const result = await User.create(req.body)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //PUT to update a user by its _id
    updateUser: async function (req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                //Sends updated version of information
                req.body, { new: true })
            res.json(user, 'User updated!')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //DELETE to remove user by its _id
    deleteUser: async function (req, res) {
        try {
            const result = await User.findByIdAndDelete(
                { _id: req.params.id },
                req.body, { new: true })
            res.json(result, 'User deleted!')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //TODO: ADD
    addFriend: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    },
    //TODO: ADD
    deleteFriend: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    }
}