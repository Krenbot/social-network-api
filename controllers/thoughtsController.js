// -addReaction thoughts find one and update ONLY UPDATE
//removeReaction - ONLY UPDATE
const { Thought } = require('../models')

module.exports = {
    findThoughts: async function (req, res) {
        try {
            const result = await Thought.find()
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    findOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-_v")
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No Thought with that ID!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
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
    //TODO: ADD
    createReaction: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    },
    //TODO: ADD
    deleteReaction: async function (req, res) {
        try {

        } catch (err) {
            res.status(500).json(err)
        }
    },
}