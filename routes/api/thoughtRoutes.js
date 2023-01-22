const router = require("express").Router();

const {
    createThought,
    findOneThought,
    findThoughts,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require("../../controllers/thoughtsController");

// /api/thought
router.route('/')
    .get(findThoughts)
    .post(createThought)

// /api/thoughts:thoughtId
router.route('/:id')
    .get(findOneThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:id/reactions')
    .post(addReaction)

// / api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:id/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router