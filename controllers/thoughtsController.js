//addReaction - thoughts find one and update ONLY UPDATE
//removeReaction - ONLY UPDATE
const { Thought } = require('../models')

module.exports = {
    create: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    find: async function (req, res) {
        try {
            const result = await Thought
                .find()
                .populate('user')
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    update: async function (req, res) {
        try {
            const result = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    delete: async function (req, res) {
        try {
            const result = await Thought.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}