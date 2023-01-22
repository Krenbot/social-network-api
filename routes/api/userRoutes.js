const router = require("express").Router();

const {
    findUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require("../../controllers/usersController");

// /api/users
router.route('/')
    .get(findUsers)
    .post(createUser)

// /api/users:userID
router.route('/:id')
    .get(findOneUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router