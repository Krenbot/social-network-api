//BONUS: Remove a user's associated thoughts when deleted.
const { User } = require('../models')

module.exports = {
    //GET all users
    findUsers: async function (req, res) {
        try {
            const result = await User.find()
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //GET a single user by _id and populated thought and friend data
    findOneUser: async function (req, res) {
        try {
            const user = await User
                .findOne({ _id: req.params.id })
                .populate('thoughts')
                .populate('friends')
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
            const result = await User.findByIdAndUpdate(
                req.params.id,
                req.body, { new: true })
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //DELETE to remove user & associated thoughts by id
    deleteUser: async function (req, res) {
        try {
            const result = await User.findByIdAndDelete(req.params.id)
            // await Thought.deleteMany(
            //     { username: user.username })
            res.json('User Deleted')
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //POST friend to user
    addFriend: async function (req, res) {
        try {
            const addedFriend = await User.findByIdAndUpdate({
                _id: req.params.id
            },
                {
                    $push: { friends: req.params.friendId }
                },
                { new: true })
            res.json(addedFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //DELETE friend from user
    deleteFriend: async function (req, res) {
        try {
            const deletedFriend = await User.findByIdAndUpdate({
                _id: req.params.id
            },
                {
                    $pull: { friends: req.params.friendId }
                },
                { new: true })
            res.json(deletedFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}