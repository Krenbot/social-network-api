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
router.route('/:userId')
    .get(findOneUser)
    .put(updateUser)
    .delete(deleteUser)

// const usersController = require("../../controllers/usersController");

// router.get("/", usersController.findUsers);

// router.get("/:id", usersController.findUser);

// router.post("/", usersController.addUser);

// router.put("/update/:id", usersController.updateUser);

// router.delete("/delete/:id", usersController.deleteUser);

module.exports = router