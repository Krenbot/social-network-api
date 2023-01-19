// -addReaction thoughts find one and update ONLY UPDATE
//removeReaction - ONLY UPDATE
const { Thought } = require('../models')

module.exports = {
    newThought: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findThought: async function (req, res) {
        try {
            const result = await Thought.find()
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateThought: async function (req, res) {
        try {
            const result = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteThought: async function (req, res) {
        try {
            const result = await Thought.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    createReaction: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteReaction: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    },
}