const router = require("express").Router();

const {
    createThought,
    findOneThought,
    findThoughts,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require("../../controllers/thoughtsController");

// /api/thought
router.route('/')
    .get(findThoughts)
    .post(createThought)

// /api/thoughts:thoughtId
router.route('/:thoughtId')
    .get(findOneThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
// .post(createReaction)

// / api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
// .delete(deleteReaction)

module.exports = router