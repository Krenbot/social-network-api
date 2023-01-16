
//DELETE to remove user by its _id
//BONUS: Remove a user's associated thoughts when deleted.

const { User } = require('../models')

module.exports = {
    //GET all users
    find: async function (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //GET a single user by _id and populated thought and friend data
    findOne: async function (req, res) {
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
    create: async function (req, res) {
        try {
            const result = await User.create(req.body)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //PUT to update a user by its _id
    update: async function (req, res) {
        try {
            const user = await User.findOneAndUpdate
        } catch (err) {
            res.status(500).json(err)
        }

    }



}