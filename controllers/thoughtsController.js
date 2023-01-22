const { Thought } = require('../models')

module.exports = {
    //GET all thoughts
    findThoughts: async function (req, res) {
        try {
            const result = await Thought.find()
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //GET one thought
    findOneThought(req, res) {
        Thought.findOne({ _id: req.params.id })
            .select("-_v")
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: "No Thought with that ID!" })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    //POST new thought
    createThought: async function (req, res) {
        try {
            const result = await Thought.create(req.body)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //PUT to update thought by ID
    updateThought: async function (req, res) {
        try {
            const result = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //DELETE thought by ID
    deleteThought: async function (req, res) {
        try {
            const result = await Thought.findByIdAndDelete(req.params.id)
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //POST new reaction
    addReaction: async function (req, res) {
        try {
            const result = await Thought.findByIdAndUpdate({
                _id: req.params.id
            },
                {
                    $push: { reactions: req.body }
                },
                { new: true })
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //DELETE reaction
    deleteReaction: async function (req, res) {
        try {
            const deletedReaction = await Thought.findByIdAndUpdate({
                _id: req.params.id
            },
                {
                    $pull: {
                        reactions: { reactionId: req.params.reactionId }
                    }
                },
                { new: true })
            res.json(deletedReaction)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}